import { Article, Video, Advice, Quote, Diary } from "../../server/interface/interfaces";

export interface UserSignup {
	username: string;
	email: string;
	password: string;
}

export interface UserSignin {
	username: string;
	password: string;
}

export interface RegisteredUserType {
	data: {
		id: number;
		username: string;
	} | null;
	token: string;
}

export interface RecommendationType {
	article: Article[];
	video: Video[];
	quote: Quote[];
	advice: Advice[];
	diary: Diary[];
}

export interface FavouriteType {
	accomplishment: string;
	favFood: string;
	favPerson: string;
	favPlace: string;
	gratitude: string;
	passion: string;
}
