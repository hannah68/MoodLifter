import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ChangeEvent, FormEvent, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/signup.css";

import { PAGE_LINK, USER_URL } from "../utils/config";

import { UserSignup, RegisteredUserType } from "../interface/interfaces";

export interface ISignupProps {
	setUser: (target: RegisteredUserType["data"] | null) => void;
	setIsLoggedIn: (target: boolean) => void;
}

const Signup = (props: ISignupProps) => {
	const { setUser, setIsLoggedIn } = props;
	const [submit, setsubmit] = useState(false);
	const [userInfos, setuserInfos] = useState<UserSignup>({
		username: "",
		email: "",
		password: "",
	});

	const navigate = useNavigate();

	useEffect(() => {
		if (submit) {
			const postUserInfoToDB = async () => {
				const userRes = await fetch(USER_URL.REGISTER, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(userInfos),
				});

				const userData = await userRes.json();

				localStorage.setItem("token", userData.token);

				if (userData.data) {
					localStorage.setItem("userId", userData.data.id.toString());
					setUser(userData.data);
					navigate(PAGE_LINK.FAVOURITE);
				}
			};
			postUserInfoToDB();
		}
		setsubmit(false);
	}, [submit, setUser, userInfos, navigate, setIsLoggedIn]);

	// handle change================================
	const changeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
		const { name, value } = e.target;
		setuserInfos({ ...userInfos, [name]: value });
	};

	// handle submit===============================
	const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setsubmit(true);
	};

	return (
		<div className="signup-page">
			<h3>Please create an account so we can track your mood</h3>
			<form className="signup-form" onSubmit={submitHandler}>
				<div className="input-groups">
					<label htmlFor="username">
						<FaUser />
					</label>
					<input
						type="text"
						placeholder="Username"
						id="username"
						name="username"
						value={userInfos.username}
						onChange={changeHandler}
					/>
				</div>
				<div className="input-groups">
					<label htmlFor="email">
						<MdEmail />
					</label>
					<input
						type="text"
						placeholder="Email"
						id="email"
						name="email"
						value={userInfos.email}
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
						name="password"
						id="password"
						value={userInfos.password}
						onChange={changeHandler}
					/>
				</div>
				<div>
					<input type="checkbox" name="terms" required />
					<span className="terms">
						I agree to the terms and privacy policy.
					</span>
				</div>
				<div className="login-container">
					<p className="signin-text">Already have an account?</p>
					<Link to={PAGE_LINK.LOGIN} className="signin-btn">
						Signin
					</Link>
				</div>
				<button type="submit" className="register-btn">
					Create Account
				</button>
			</form>
		</div>
	);
};

export default Signup;
