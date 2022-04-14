import { prisma } from "../utils/prisma";
import { Request, Response } from "express";

import { HTTP_RESPONSE } from "../utils/config";

// create favourite user response==============================
export const createFavourite = async (
	req: Request,
	res: Response
): Promise<Response<any, Record<string, any>>> => {
	const {
		favPerson,
		favPlace,
		favFood,
		gratitude,
		passion,
		accomplishment,
		userId,
	} = req.body;

	const createdfavourite = await prisma.favourite.create({
		data: {
			favPerson,
			favPlace,
			favFood,
			gratitude,
			passion,
			accomplishment,
			userId,
		},
	});

	if (!createdfavourite) {
		return res
			.status(HTTP_RESPONSE.INTERNAL_ERROR.CODE)
			.json({ error: HTTP_RESPONSE.INTERNAL_ERROR.MESSAGE });
	}
	return res.status(HTTP_RESPONSE.OK.CODE).json({ data: createdfavourite });
};

// get user's favourite by id=================================
export const getFavouriteById = async (
	req: Request,
	res: Response
): Promise<Response<any, Record<string, any>>> => {
	const id: number = Number(req.params.id);

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

	const favourite = await prisma.favourite.findUnique({
		where: {
			userId: foundUser.id,
		},
	});
	return res.status(HTTP_RESPONSE.OK.CODE).json({ data: favourite });
};
