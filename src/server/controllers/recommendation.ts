import { prisma } from "../utils/prisma";
import { Request, Response } from "express";

import {HTTP_RESPONSE} from '../utils/config';

import {capitaliseFirstLetter} from '../../client/utils/utils'

export const getArticle = async(req: Request, res: Response) => {
    const {feeling} = req.params;
    const articleType = capitaliseFirstLetter(feeling);

    const article = await prisma.article.findMany({
        where: {
            articleType: articleType
        }
    });
    // add error handling

    res.status(HTTP_RESPONSE.OK.CODE).json({ data: article });
}