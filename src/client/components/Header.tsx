import React from "react";
import { Link } from 'react-router-dom';

import '../styles/header.css'

export interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
	return (
		<header>
            <nav>
                <h1>MoodLifter</h1>
                <ul className="navbar">
                    <li>
                        <Link to='/' className="navbar-link">Sign up</Link>
                    </li>
                    <li>
                        <Link to='/' className="navbar-link">Sign in</Link>
                    </li>
                </ul>
            </nav>
        </header>
	);
};

export default Header;
