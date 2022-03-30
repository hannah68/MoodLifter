import React from "react";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

import "../styles/signup.css";

export interface ISigninProps {}

const Signin: React.FunctionComponent<ISigninProps> = (props) => {
	return (
		<div className="signin-page">
			<h1>Sign In</h1>
			<form className="signin-form">
				<div className="input-groups">
					<label htmlFor="email">
						<MdEmail />
					</label>
					<input type="text" placeholder="Email" id="email" />
				</div>
				<div className="input-groups">
					<label htmlFor="password">
						<RiLockPasswordFill />
					</label>
					<input type="text" placeholder="Password" id="password" />
				</div>
        <button type="submit" className="register-btn login">Sign In</button>
			</form>
		</div>
	);
};

export default Signin;
