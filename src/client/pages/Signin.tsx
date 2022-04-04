import {ChangeEvent, FormEvent, useState} from "react";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

import "../styles/signup.css";

import {USER_URL} from '../utils/config';

export interface userSigninType {
	username: string;
	password: string;
}

export interface registeredUserType {
	data: {
		id: number,
        username: string
	},
	token: string
}

const Signin = () => {
	const [user, setuser] = useState<userSigninType>({
		username: '',
		password: ''
	});

	const navigate = useNavigate();

	// post user info ===========================
	const postUserLoginToDB = async () => {
		const userRes = await fetch(USER_URL.LOGIN, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(user)
		})
		const userData = await userRes.json();
		return userData;
	}

	// handle change==============================
	const changeHandler = (e: ChangeEvent<HTMLInputElement>) : void => {
		const {name, value} = e.target;
		setuser({...user, [name]: value});
	}
	// handle submit==============================
	const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const signedInUser: registeredUserType = await postUserLoginToDB();

		// set error if user not found

		localStorage.setItem('token', signedInUser.token);
		localStorage.setItem('userId', signedInUser.data.id.toString());

		setuser({
			username: "",
			password: "",
		});

		navigate('/feeling');
	}

	return (
		<div className="signin-page">
			<h2>Sign In</h2>
			<form className="signin-form" onSubmit={submitHandler}>
				<div className="input-groups">
					<label htmlFor="username">
						<FaUser />
					</label>
					<input 
					type="text" 
					placeholder="username" 
					id="username" 
					name="username"
					value={user.username}
					onChange={changeHandler}
					/>
				</div>
				<div className="input-groups">
					<label htmlFor="password">
						<RiLockPasswordFill />
					</label>
					<input 
					type="text" 
					placeholder="Password" 
					id="password"
					name="password"
					value={user.password}
					onChange={changeHandler} 
					/>
				</div>
        <button type="submit" className="register-btn login">Sign In</button>
			</form>
		</div>
	);
};

export default Signin;
