import bcrypt from 'bcrypt'

export const hashPassword = (password: string): Promise<string> => {
  return bcrypt.hash(password, 8);
}