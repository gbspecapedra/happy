import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import bcrypt from 'bcrypt'

@Entity('users')
export default class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  checkPassword(newPassword: string): Promise<boolean> {
    return bcrypt.compare(newPassword, this.password);
  }
}