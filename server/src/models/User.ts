import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate } from 'typeorm';
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

  @BeforeInsert() 
  @BeforeUpdate()
  encrypt = async () => {
    const password_hash = await bcrypt.hash(this.password, 8);
    this.password = password_hash;
  }
    
  checkPassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password);
  }
}
