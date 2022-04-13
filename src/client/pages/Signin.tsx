import { ChangeEvent, FormEvent, useState, useEffect } from "react";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import "../styles/signup.css";

import { PAGE_LINK, USER_URL } from "../utils/config";

import { UserSignin } from "../interface/interfaces";


export interface ISigninProps {
	setIsLoggedIn: (target: boolean) => void;
}

const Signin = (props: ISigninProps) => {
	const { setIsLoggedIn } = props;
	const [submit, setsubmit] = useState(false);
	const [userInfo, setuserInfo] = useState<UserSignin>({
		username: "",
		password: "",
	});

	const navigate = useNavigate();

	// post user info ===========================
	useEffect(() => {
		if (submit) {
			const postUserLoginToDB = async () => {
				const userRes = await fetch(USER_URL.LOGIN, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(userInfo),
				});
				const userData = await userRes.json();

				localStorage.setItem('token', userData.token);
				if (userData.data) {
					localStorage.setItem("userId", userData.data.id.toString());
					setIsLoggedIn(true);
					navigate(PAGE_LINK.FELLING);
				}
			};
			postUserLoginToDB();
		}
		setsubmit(false);
	}, [submit, setIsLoggedIn, userInfo, navigate]);

	// handle change==============================
	const changeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
		const { name, value } = e.target;
		setuserInfo({ ...userInfo, [name]: value });
	};

	// handle submit==============================
	const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setsubmit(true);
	};

	return (
		<div className="signin-page">
			<h2>Thanks for answering the questions, </h2>
			<h3>Sign in to get started ...</h3>
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
						value={userInfo.username}
						onChange={changeHandler}
					/>
				</div>
				<div className="input-groups">
					<label htmlFor="password">
						<RiLockPasswordFill />
					</label>
					<input
						type="password"
						placeholder="Password"
						id="password"
						name="password"
						value={userInfo.password}
						onChange={changeHandler}
					/>
				</div>
				<button type="submit" className="register-btn login">
					Sign In
				</button>
			</form>
		</div>
	);
};

export default Signin;
