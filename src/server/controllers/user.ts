import { prisma } from "../utils/prisma";
import { Request, Response } from "express";

import { hashedPassword, createToken, checkPassword } from "../utils/auth";

import { User , UserWithoutPass } from "../config/interfaces";

import {HTTP_RESPONSE} from '../utils/config';

// remove user password================================
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

// get user by id ========================================
export const getUserById = async (req: Request, res: Response) => {
	const id = Number(req.params.id)

	const user = await prisma.user.findUnique({
		where: {
			id
		}
	});

	if(!user){
		return res.status(HTTP_RESPONSE.UNAUTHORIZED.CODE).json(HTTP_RESPONSE.UNAUTHORIZED.MESSAGE);
	}

	const userWithoutPassword = await createUserWithoutPass(user);

	res.status(HTTP_RESPONSE.OK.CODE).json({ data: userWithoutPassword });
}

// create profile====================================
export const createProfile = async(req: Request, res: Response) => {
	const userId = Number(req.body.userId);

	let { profilePicture } = req.body;

    if (!profilePicture) {
        profilePicture = "https://miro.medium.com/max/720/1*W35QUSvGpcLuxPo3SRTH4w.png";
    }

	const createdProfile = await prisma.profile.create({
		data: {
			userId: userId,
			profilePicture: profilePicture,
		},
	});

	return res.status(HTTP_RESPONSE.OK.CODE).json({ data: createdProfile });
}

// create journal for user===============================
export const createUserJournal = async (req: Request, res: Response) => {
	const { text, userId} = req.body;

	const journal = await prisma.diary.create({
		data: {
			text,
			user: {
				connect: {
					id: Number(userId)
				},
			}
		}
	})

	return res.status(HTTP_RESPONSE.OK.CODE).json({ data: journal });
}

// get user Journals==================================
export const getAllUserJournals = async(req: Request, res: Response) => {
	const id = Number(req.params.id)

	const findUser = await prisma.user.findUnique({
		where: {
			id
		}
	});

	// if(!findUser){

	// }
	if(findUser){
		const journal = await prisma.diary.findMany({
			where: {
				userId: findUser.id
			}
		});
		return res.status(HTTP_RESPONSE.OK.CODE).json({ data: journal });
	}

	// if(!diary){

	// }
}

// delete user journal ===================================
export const deleteUserJournal = async (req: Request, res: Response) => {
	const journalId = Number(req.params.journalId);
	// const userId = Number(req.params.userId);

	// const findAllUserJournals = await prisma.diary.findMany({
	// 	where: {
	// 		userId
	// 	}
	// });

	const journal = await prisma.diary.delete({
		where: {
			id: journalId
		}
	})

	return res.status(HTTP_RESPONSE.OK.CODE).json({ data: journal });
}