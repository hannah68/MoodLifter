import React from "react";
import { Link } from "react-router-dom";

import "../styles/header.css";

export interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
	return (
		<header>
			<nav>
				<h1>
					<Link to="/" className="logo-link">MoodLifter</Link>
				</h1>

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
