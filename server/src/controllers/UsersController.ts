import { Request, Response } from 'express'
import { getRepository } from 'typeorm';
import * as Yup from 'yup';

import User from '../models/User';
import { hashPassword } from '../utils/hashPassword';

import userView from '../views/users_view'

export default {

  async show(request: Request, response: Response) {
    const { email } = request.params;
    const usersRepository = getRepository(User);
    const user = await usersRepository.findOneOrFail({ where: { email } });

    return response.json(userView.render(user));
  },

  async create(request: Request, response: Response) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string().min(6).required(),
    });

    if (!(await schema.validate(request.body, { abortEarly: false })))
      return response.status(400).json({ error: 'Validation fails' });
    
    const usersRepository = getRepository(User);
    const userExists = await usersRepository.findOne({where: {email: request.body.email}});
    
    if (userExists) return response.status(400).json({ error: 'User already exists!' });

    const password_hash = await hashPassword(request.body.password);

    const user = usersRepository.create({...request.body, password: password_hash});
    await usersRepository.save(user);

    return response.status(201).json(user);
  },

  async update(request: Request, response: Response) {
    const { email } = request.params;

    const schema = Yup.object().shape({
      oldPassword: Yup.string().required(),
      newPassword: Yup.string().min(6).required(),
      confirmPassword: Yup.string().min(6).required()
    });

    if (!(await schema.validate(request.body, { abortEarly: false })))
      return response.status(400).json({ error: 'Validation fails' });
    
    const { oldPassword, newPassword, confirmPassword } = request.body;

    if (newPassword !== confirmPassword)
      return response.status(401).json({ error: 'New password does not match!' });
    
    const usersRepository = getRepository(User);
    const userExists = await usersRepository.findOne({ where: { email } });

    if (!userExists) return response.status(400).json({ error: 'User does not exists!' });

    if (oldPassword && !(await userExists?.checkPassword(oldPassword)))
      return response.status(401).json({ error: 'Old password does not match!' });
    
    const password_hash = await hashPassword(newPassword);
    
    userExists.password = password_hash;
    
    await usersRepository.save(userExists);

    return response.status(200).json({ message: 'Password updated!' });
    
  }
}