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


export const getUserById = async (req: Request<{ id: number}>, res: Response) => {
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


export const createUserDiary = async (req: Request, res: Response) => {
	const { text, userId} = req.body;

	const diary = await prisma.diary.create({
		data: {
			text,
			user: {
				connect: {
					id: Number(userId)
				},
			}
		}
	})

	return res.status(HTTP_RESPONSE.OK.CODE).json({ data: diary });
}

export const getUserDiary = async(req: Request, res: Response) => {
	const id = Number(req.params.id)

	const findUser = await prisma.user.findUnique({
		where: {
			id
		}
	});

	// if(!findUser){

	// }
	if(findUser){
		const diary = await prisma.diary.findMany({
			where: {
				userId: findUser.id
			}
		});
		return res.status(HTTP_RESPONSE.OK.CODE).json({ data: diary });
	}

	// if(!diary){

	// }
}

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

export const saveQuoteForUser = async (req: Request, res: Response) => {
	const userId = Number(req.body.userId);
	const { text, id } = req.body;

	// const findUser = await prisma.favUserQuote.findMany({
	// 	where: {
	// 		userId
	// 	}
	// });

	// console.log(findSavedQuote);

	// if(!findSavedQuote){
		const savedQuote = await prisma.favUserQuote.create({
			data: {
				text,
				
				
			}
		})
	// 	return res.status(HTTP_RESPONSE.OK.CODE).json({ data: savedQuote });
	// }
}


export const getAllFavQuote = async (req: Request, res: Response) => {
	const userId = Number(req.params.id);


	// const favQuote = await prisma.favUserQuote.findMany({
	// 	where: {
	// 		userId
	// 	}
	// });
	// if(!favQuote){
	// 	return res.status(HTTP_RESPONSE.NOT_FOUND.CODE).json(HTTP_RESPONSE.NOT_FOUND.MESSAGE)
	// }
	
	// return res.status(HTTP_RESPONSE.OK.CODE).json({ data: favQuote });
}

export const saveArticleForUser = async (req: Request, res: Response) => {
	const userId = Number(req.body.userId);
	const { title, link } = req.body;

	// const savedArticle = await prisma.favUserArticle.create({
	// 	data: {
	// 		title,
	// 		link,
	// 		userId
	// 	}
	// })
	
	// return res.status(HTTP_RESPONSE.OK.CODE).json({ data: savedArticle });
}


export const getAllFavArticle = async (req: Request, res: Response) => {
	const userId = Number(req.params.id);
	// const favArticle = await prisma.favUserArticle.findMany({
	// 	where: {
	// 		userId
	// 	}
	// });
	// if(!favArticle){
	// 	return res.status(HTTP_RESPONSE.NOT_FOUND.CODE).json(HTTP_RESPONSE.NOT_FOUND.MESSAGE)
	// }
	// console.log(favArticle);
	// res.status(HTTP_RESPONSE.OK.CODE).json({ data: favArticle });
}

export const saveVideoForUser = async (req: Request, res: Response) => {
	const userId = Number(req.body.userId);
	const { title, link } = req.body;

	// const savedVideo = await prisma.favUserVideo.create({
	// 	data: {
	// 		title,
	// 		link,
	// 		userId
	// 	}
	// })
	// res.status(HTTP_RESPONSE.OK.CODE).json({ data: savedVideo });
}


export const getAllFavVideo = async (req: Request, res: Response) => {
	const userId = Number(req.params.id);

	// const favVideo = await prisma.favUserVideo.findMany({
	// 	where: {
	// 		userId
	// 	}
	// });

	// if(!favVideo){
	// 	return res.status(HTTP_RESPONSE.NOT_FOUND.CODE).json(HTTP_RESPONSE.NOT_FOUND.MESSAGE)
	// }
	// console.log(favVideo);
	// res.status(HTTP_RESPONSE.OK.CODE).json({ data: favVideo });
}


