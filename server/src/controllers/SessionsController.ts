import { Request, Response } from 'express'
import { getRepository } from 'typeorm';
import * as Yup from 'yup';
import User from '../models/User';

import { sign } from 'jsonwebtoken'

export default {
  async index(request: Request, response: Response) {
    const schema = Yup.object().shape({
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string().required(),
    });

    if (!(await schema.validate(request.body, { abortEarly: false })))
      throw new Error('Validation fails!');
    
    const {email, password} = request.body
    
    const usersRepository = getRepository(User);
    const userExists = await usersRepository.findOne({ where: { email } });

    if (!userExists) throw new Error('Incorrect email/password!');

    if (password && !(await userExists?.checkPassword(password)))
      throw new Error('Incorrect email/password!');
    
    const token = sign({}, '8c0707b6c1604fb4256cda33b7749b68', {
      subject: String(userExists.id),
      expiresIn: '1d'
    })


    return response.json({message: 'logged', token});
  }
}