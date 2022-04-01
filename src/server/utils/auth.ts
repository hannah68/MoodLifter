import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const saltRounds = 10;

export const hashedPassword = async (password: string) => {
    return bcrypt.hashSync(password, saltRounds)
}