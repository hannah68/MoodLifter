import { prisma } from "../utils/prisma";
import { Request, Response } from "express";

import { HTTP_RESPONSE } from "../utils/config";

import { moods } from "../data/feeling";
import { articles } from "../data/article";
import { videos } from "../data/video";
import { quotes } from "../data/quote";
import { advices } from "../data/advice";

// seed feelings =============================================
const seedFeeling = async (): Promise<void> => {
	for (let i = 0; i < moods.length; i++) {
		const { name } = moods[i];
		const generatedFeeling = await prisma.feeling.create({
			data: {
				name,
			},
		});
		console.log("Created Feeling:", generatedFeeling);
	}
};

// seed articles =============================================
const seedArticle = async (): Promise<void> => {
	for (let i: number = 0; i < articles.length; i++) {
		const { title, content, link, articleType } = articles[i];

		const feelingObj = await getFeeling(articles[i].articleType);

		if (feelingObj) {
			const generatedArticle = await prisma.article.create({
				data: {
					title,
					content,
					link,
					articleType,
					feelingId: feelingObj.id,
				},
			});
			console.log("Created Article", generatedArticle);
		}
	}
};

// seed videos =================================================
const seedVideos = async (): Promise<void> => {
	for (let i: number = 0; i < videos.length; i++) {
		const { title, link, content, videoType } = videos[i];

		const feelingObj = await getFeeling(videos[i].videoType);

		if (feelingObj) {
			const generatedVideos = await prisma.video.create({
				data: {
					title,
					link,
					content,
					videoType,
					feelingId: feelingObj.id,
				},
			});
			console.log("Created Videos", generatedVideos);
		}
	}
};

// seed quotes =================================================
const seedQuotes = async (): Promise<void> => {
	for (let i: number = 0; i < quotes.length; i++) {
		const { text, author, quoteType } = quotes[i];

		const feelingObj = await getFeeling(quotes[i].quoteType);

		if (feelingObj) {
			const generatedQuotes = await prisma.quote.create({
				data: {
					text,
					author,
					quoteType,
					feelingId: feelingObj.id,
				},
			});
			console.log("Created Quotes", generatedQuotes);
		}
	}
};

// seed Advice=================================
const seedAdvice = async (): Promise<void> => {
	for (let i: number = 0; i < advices.length; i++) {
		const { text, adviceType } = advices[i];

		const feelingObj = await getFeeling(advices[i].adviceType);

		if (feelingObj) {
			const generatedAdvice = await prisma.advice.create({
				data: {
					text,
					adviceType,
					feelingId: feelingObj.id,
				},
			});
			console.log("Created Advices", generatedAdvice);
		}
	}
};

// get feeling================================
const getFeeling = async (quoteType: string) => {
	const feeling = await prisma.feeling.findFirst({
		where: {
			name: quoteType,
		},
	});
	return feeling;
};

// seed Database===============================
export const seedMoodDatabase = async (req: Request, res: Response) => {
	await seedFeeling();
	await seedArticle();
	await seedVideos();
	await seedQuotes();
	await seedAdvice();
	res.status(HTTP_RESPONSE.OK.CODE).json("Database seeded successfully");
};
