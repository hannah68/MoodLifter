export interface Feeling {
	name: string;
}

export interface Quote {
	text: string;
	author: string;
	quoteType: string;
}

export interface Article {
	title: string;
	content: string;
	link: string;
	articleType: string;
}

export interface Video {
	title: string;
	link: string;
	content: string;
	videoType: string;
}

export interface Advice {
	text: string[];
	adviceType: string;
}

export interface User {
	username: string;
	email: string;
	password: string;
}



