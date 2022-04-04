
import { prisma } from "../utils/prisma";
import { Request, Response } from "express";

// import {fakeUsers} from '../utils/faker';
// import {NUMBER_OF_USER_TO_GENERATE} from '../utils/config';
// import {HTTP_RESPONSE } from '../utils/config'

// import {Quote, Article, Video, Advice} from '../config/interfaces';

import {moods} from '../data/feeling';
// import {articles} from '../data/article';
// import {videos} from '../data/video';
// import {quotes} from '../data/quote';

// seed feelings =============================================
const seedFeeling = async ():Promise<void> => {

    for(let i= 0; i<moods.length; i++){
        const { name } = moods[i];
        const generatedFeeling = await prisma.feeling.create({
            data: {
                name,
            }
        })
        console.log('Created Feeling:', generatedFeeling);
    }
}

// seed articles =============================================
// const seedArticle = async (): Promise<void> => {
//     for(let i: number=0; i<articles.length; i++){
//         const {title, content,link,articleType} = articles[i];

//         const feelingid = await getFeelingId(articles[i].articleType)

//         const generatedArticle = await prisma.article.create({
//             data: {
//                 title,
//                 content,
//                 link,
//                 articleType,
//                 feelingId: 
//             }
//         })
//         console.log('Created Article', generatedArticle);
//     }
// }

// seed videos =================================================
// const seedVideos = async(): Promise<void> => {
//     for(let i:number = 0; i<videos.length; i++){
//         const {title, link, content, videoType} = videos[i];
//         const generatedVideos = await prisma.video.create({
//             data: {
//                 title,
//                 link,
//                 content,
//                 videoType
//             }
//         })
//         console.log('Created Videos', generatedVideos)
//     }
// }

// seed quotes =================================================
// const seedQuotes = async(): Promise<void> => {
//     for(let i:number = 0; i<quotes.length; i++){

//         const {text, author, quoteType} = quotes[i];

//         const feelingid = await getFeelingId(quotes[i].quoteType)
//         if(feelingid){
//             console.log(feelingid)
//         }
        

//         // const generatedQuotes = await prisma.quote.create({
//         //     data: {
//         //         text,
//         //         author,
//         //         quoteType,
//         //         feelingId: 
//         //     }
//         // })
//         // console.log('Created Quotes', generatedQuotes)
//     }
// }

// const getFeelingId = async (quoteType: string) => {
//     const feeling = await prisma.feeling.findFirst({
//         where: {
//             name : quoteType
//         }
//     })
//     return feeling
// }

export const seedMoodDatabase = async(req: Request, res: Response)=> {
    console.log('here')
    await seedFeeling();
    res.status(200).json('Database seeded');
}








