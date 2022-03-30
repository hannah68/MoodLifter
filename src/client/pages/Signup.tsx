import React from "react";
import { RiLockPasswordFill } from 'react-icons/ri';
import { MdEmail } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';
import { Link } from "react-router-dom";

import '../styles/signup.css';

export interface ISignupProps {}

const Signup: React.FunctionComponent<ISignupProps> = (props) => {
	return (
		<div className="signup-page">
			<h2>Please create an account so we can track your mood</h2>
			<form className="signup-form"> 
				<div className="input-groups">
					<label htmlFor="username"><FaUser/></label>
					<input type="text" placeholder="Username" id="username"/>
				</div>
				<div className="input-groups">
					<label htmlFor="email"><MdEmail/></label>
					<input type="text" placeholder="Email" id="email"/>
				</div>
				<div className="input-groups">
					<label htmlFor="password"><RiLockPasswordFill/></label>
					<input type="text" placeholder="Password" id="password" />
				</div>
				<div>
					<input type="checkbox" name="terms" required/>
          <span className="terms">I agree to the terms and privacy policy.</span>
				</div>
        <div className="login-container">
          <p className="signin-text">Already have an account?</p>
          <Link to='/signin' className="signin-btn">Signin</Link>
        </div>
				<button type="submit" className="register-btn">
					Create Account
				</button>
			</form>
		</div>
	);
};

export default Signup;
