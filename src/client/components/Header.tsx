import React from "react";
import { Link } from "react-router-dom";

import "../styles/header.css";

export interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
	return (
		<header>
			<nav>
				<div>
					<Link to="/" className="logo-link">
						<img src="./assets/images/logo.png" alt="logo" className="logo-img"/>
						<span className="logo">MoodLifter</span>
					</Link>
				</div>

				<ul className="navbar">
					<li>
						<Link to="/signup" className="navbar-link">
							Sign up
						</Link>
					</li>
					<li>
						<Link to="/signin" className="navbar-link">
							Sign in
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
