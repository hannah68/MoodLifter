import { prisma } from "../utils/prisma";
import { Request, Response } from "express";
import { Prisma } from "@prisma/client";

import { hashedPassword, createToken, checkPassword } from "../utils/auth";

import { User, UserWithoutPass } from "../interface/interfaces";

import { HTTP_RESPONSE, PRISMA_ERROR } from "../utils/config";

// remove user password================================
const createUserWithoutPass = async (user: UserWithoutPass) => {
	const newUser = {
		username: user.username,
		email: user.email,
		id: user.id,
	};
	return newUser;
};

// register user=======================================
export const createUser = async (req: Request, res: Response) => {
	const { username, email, password } = req.body;

	const passwordHashed = await hashedPassword(password);

	try {
		let createduser: User = await prisma.user.create({
			data: {
				username,
				email,
				password: passwordHashed,
			},
		});

		if (!createduser) {
			return res
				.status(HTTP_RESPONSE.INTERNAL_ERROR.CODE)
				.json({ error: HTTP_RESPONSE.INTERNAL_ERROR.MESSAGE });
		}

		const userWithoutPassword = await createUserWithoutPass(createduser);
		const token = await createToken({ id: userWithoutPassword.id });
		return res
			.status(HTTP_RESPONSE.OK.CODE)
			.json({ data: userWithoutPassword, token: token });
	} catch (error) {
		if (error instanceof Prisma.PrismaClientKnownRequestError) {
			if (error.code === PRISMA_ERROR.UNIQUE_CONSTRAINT_VIOLATION.CODE) {
				res
					.status(HTTP_RESPONSE.INTERNAL_ERROR.CODE)
					.json({
						error:
							PRISMA_ERROR.UNIQUE_CONSTRAINT_VIOLATION.CLIENT_MESSAGE_REGISTER,
					});
			}
		}
	}
};

// login user===========================================
export const loginUser = async (req: Request, res: Response) => {
	const { username, password } = req.body;

	let foundUser = await prisma.user.findUnique({
		where: {
			username,
		},
	});

	if (!foundUser) {
		return res
			.status(HTTP_RESPONSE.UNAUTHORIZED.CODE)
			.json(HTTP_RESPONSE.UNAUTHORIZED.MESSAGE);
	}

	const checkedPasswordMatch = await checkPassword(
		password,
		foundUser.password
	);

	if (!checkedPasswordMatch) {
		return res
			.status(HTTP_RESPONSE.UNAUTHORIZED.CODE)
			.json({ error: HTTP_RESPONSE.UNAUTHORIZED.MESSAGE });
	}

	const userWithoutPassword = await createUserWithoutPass(foundUser);
	const token = await createToken({ id: userWithoutPassword.id });
	return res
		.status(HTTP_RESPONSE.OK.CODE)
		.json({ data: userWithoutPassword, token: token });
};

// get user by id ========================================
export const getUserById = async (
	req: Request,
	res: Response
): Promise<Response<any, Record<string, any>>> => {
	const id = Number(req.params.id);

	const foundUser = await prisma.user.findUnique({
		where: {
			id,
		},
	});

	if (!foundUser) {
		return res
			.status(HTTP_RESPONSE.NOT_FOUND.CODE)
			.json(HTTP_RESPONSE.NOT_FOUND.MESSAGE);
	}

	const userWithoutPassword = await createUserWithoutPass(foundUser);
	return res.status(HTTP_RESPONSE.OK.CODE).json({ data: userWithoutPassword });
};

// create profile====================================
export const createProfile = async (
	req: Request,
	res: Response
): Promise<Response<any, Record<string, any>>> => {
	const userId = Number(req.body.userId);

	let { profilePicture } = req.body;

	if (!profilePicture) {
		profilePicture =
			"https://miro.medium.com/max/720/1*W35QUSvGpcLuxPo3SRTH4w.png";
	}

	const createdProfile = await prisma.profile.create({
		data: {
			userId,
			profilePicture,
		},
	});
	return res.status(HTTP_RESPONSE.OK.CODE).json({ data: createdProfile });
};

// create journal for user===============================
export const createUserJournal = async (
	req: Request,
	res: Response
): Promise<Response<any, Record<string, any>>> => {
	const { text, userId } = req.body;

	const createdJournal = await prisma.diary.create({
		data: {
			text,
			user: {
				connect: {
					id: Number(userId),
				},
			},
		},
	});

	if (!createdJournal) {
		return res
			.status(HTTP_RESPONSE.INTERNAL_ERROR.CODE)
			.json({ error: HTTP_RESPONSE.INTERNAL_ERROR.MESSAGE });
	}
	return res.status(HTTP_RESPONSE.OK.CODE).json({ data: createdJournal });
};

// get user Journals==================================
export const getAllUserJournals = async (
	req: Request,
	res: Response
): Promise<Response<any, Record<string, any>>> => {
	const id = Number(req.params.id);

	const foundUser = await prisma.user.findUnique({
		where: {
			id,
		},
	});

	if (!foundUser) {
		return res
			.status(HTTP_RESPONSE.NOT_FOUND.CODE)
			.json({ error: HTTP_RESPONSE.NOT_FOUND.MESSAGE });
	}

	const journal = await prisma.diary.findMany({
		where: {
			userId: foundUser.id,
		},
	});
	return res.status(HTTP_RESPONSE.OK.CODE).json({ data: journal });
};

// delete user journal ===================================
export const deleteUserJournal = async (
	req: Request,
	res: Response
): Promise<Response<any, Record<string, any>>> => {
	const journalId = Number(req.params.journalId);

	const journal = await prisma.diary.delete({
		where: {
			id: journalId,
		},
	});

	return res.status(HTTP_RESPONSE.OK.CODE).json({ data: journal });
};
