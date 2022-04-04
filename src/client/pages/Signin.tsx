import {ChangeEvent, FormEvent, useState} from "react";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

import "../styles/signup.css";

import {USER_URL} from '../utils/config';

const Signin = () => {
	const [user, setuser] = useState({
		username: '',
		password: ''
	});

	const navigate = useNavigate();

	// post user info ===========================
	const postUserLoginToDB = async () => {
		const res = await fetch(USER_URL.LOGIN, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(user)
		})
		const data = res.json();
		console.log(data);
	}

	// handle change==============================
	const changeHandler = (e: ChangeEvent<HTMLInputElement>) : void => {
		const {name, value} = e.target;
		setuser({...user, [name]: value});
	}
	// handle submit==============================
	const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		await postUserLoginToDB();

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
