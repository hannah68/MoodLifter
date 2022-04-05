import { Link, useNavigate  } from "react-router-dom";
import {capitaliseFirstLetter} from '../utils/utils';

import "../styles/header.css";

import {RegisteredUserType} from '../interfaces';

export interface IHeaderProps {
	user: RegisteredUserType['data'];
	setUser: (target: RegisteredUserType['data']) => void;
	isLoggedIn: boolean;
	setIsLoggedIn: (target: boolean) => void;
}

const Header = (props: IHeaderProps) => {
	const navigate = useNavigate();

	const handleClick = () => {
		localStorage.removeItem(localStorage.token);
        localStorage.removeItem(localStorage.userId);
        props.setIsLoggedIn(false);
        props.setUser(null);
        navigate('/');
	}

	const formatUserName = (user: any) => {
        let username = user.username;
        username = username.toLowerCase();
        return capitaliseFirstLetter(username);
    };

	// console.log('header user', props.user);
	console.log('header login', props.isLoggedIn);

	return (
		<header>
			<nav>
				<div>
					<Link to="/" className="logo-link">
						<img
							src="./assets/images/logo.png"
							alt="logo"
							className="logo-img"
						/>
						<span className="logo">MoodLifter</span>
					</Link>
				</div>
				<ul className="navbar">
					{!props.isLoggedIn && (
						<>
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
						</>
					)}
					{props.isLoggedIn && props.user && (
						<>
							<li>
								<Link to="/profile" className="navbar-link">
									Hi {formatUserName(props.user)}
								</Link>
							</li>
							<li onClick={handleClick}>
								<Link to="/" className="navbar-link">
									Sign out
								</Link>
							</li>
						</>
					)}
				</ul>
			</nav>
		</header>
	);
};

export default Header;
