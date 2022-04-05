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
		id: number,
        username: string
	}| null,
	token: string
}