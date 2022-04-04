import { prisma } from "../utils/prisma";
import { Request, Response } from "express";

import { hashedPassword, createToken, checkPassword } from "../utils/auth";

import { User , UserWithoutPass } from "../config/interfaces";

import {HTTP_RESPONSE} from '../utils/config';

const createUserWithoutPass = async (user: UserWithoutPass) => {
	const newUser = {
		username: user.username,
		email: user.email,
		id: user.id
	}
	return newUser;
}
// register user=======================================
export const createUser = async (req: Request, res: Response) => {
	const { username, email, password } = req.body;
    
	const passwordHashed = await hashedPassword(password);

	let user: User = await prisma.user.create({
		data: {
			username,
			email,
			password: passwordHashed
		},
	});

	const userWithoutPassword = await createUserWithoutPass(user);

	const token = await createToken({id: userWithoutPassword.id})

	res.status(200).json({ data: userWithoutPassword, token: token });
};

// login user===========================================
export const loginUser = async(req: Request, res: Response) => {
	const {username, password} = req.body;

	let foundUser = await prisma.user.findUnique({
		where: {
			username
		}
	});

	if(!foundUser){
		return res.status(HTTP_RESPONSE.UNAUTHORIZED.CODE).json(HTTP_RESPONSE.UNAUTHORIZED.MESSAGE);
	}

	const checkedPasswordMatch = await checkPassword(password, foundUser.password);

	if (!checkedPasswordMatch) {
		return res.status(HTTP_RESPONSE.UNAUTHORIZED.CODE).json({ error: HTTP_RESPONSE.UNAUTHORIZED.MESSAGE });
	}
	
	const userWithoutPassword = await createUserWithoutPass(foundUser);

	const token = await createToken({id: userWithoutPassword.id});

	res.status(HTTP_RESPONSE.OK.CODE).json({ data: userWithoutPassword, token: token});
}