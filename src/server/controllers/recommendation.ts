import { prisma } from "../utils/prisma";
import { Request, Response } from "express";

import {HTTP_RESPONSE} from '../utils/config';

import {capitaliseFirstLetter} from '../../client/utils/utils'

export const getAllFeelingMaterials = async(req: Request, res: Response) => {
    const {feeling} = req.params;
    const type = capitaliseFirstLetter(feeling);

    const article = await prisma.article.findMany({
        where: {
            articleType: type
        }
    });
    const video = await prisma.video.findMany({
        where: {
            videoType: type
        }
    });
    const advice = await prisma.advice.findMany({
        where: {
            adviceType: type
        }
    });
    const quote = await prisma.quote.findMany({
        where: {
            quoteType: type
        }
    });
    // add error handling

    res.status(HTTP_RESPONSE.OK.CODE).json({ data: [{article: article},{video: video}, {advice: advice}, {quote: quote}]});
}