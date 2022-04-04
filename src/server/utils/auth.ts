import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {SECRET} from './config';

const saltRounds = 10;



export const hashedPassword = async (password: string) => {
    return bcrypt.hashSync(password, saltRounds)
}

export const createToken = async(payload: any) => {
    return jwt.sign(payload, SECRET);
}

export const checkPassword = async(textPassword:any, hashedPassword: any) => {
    return await bcrypt.compare(textPassword, hashedPassword);
}