import { prisma } from "../utils/prisma";
import { Request, Response } from "express";

import { HTTP_RESPONSE } from "../utils/config";

export const createFavourite = async(req: Request, res: Response) => {
    const {favPerson, favPlace, favFood, gratitude, passion, accomplishment, userId} = req.body;

    const favourite = await prisma.favourite.create({
        data: {
            favPerson,
            favPlace,
            favFood,
            gratitude,
            passion,
            accomplishment,
            userId
        }
    });
    return res.status(HTTP_RESPONSE.OK.CODE).json({ data: favourite });
}