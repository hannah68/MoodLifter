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
	const {setIsLoggedIn, setUser, user, isLoggedIn} = props;
	const navigate = useNavigate();

	const handleClick = () => {
		localStorage.removeItem('token');
        localStorage.removeItem('userId');
        setIsLoggedIn(false);
        setUser(null);
        navigate('/');
	}

	const formatUserName = (user: any) => {
        let username = user.username;
        username = username.toLowerCase();
        return capitaliseFirstLetter(username);
    };

	return (
		<header>
			<nav>
				<div>
					<Link to="/" className="logo-link">
						<img
							src="./assets/images/girl.png"
							alt="logo"
							className="logo-img"
						/>
						<span className="logo">MoodLifter</span>
					</Link>
				</div>
				<ul className="navbar">
					{!isLoggedIn && (
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
					{isLoggedIn && user && (
						<>
							<li>
								<Link to="/profile" className="navbar-link">
									Hi <span className="user-name">{formatUserName(props.user)}</span>
								</Link>
							</li>
							<li>
								<Link to="/journal" className="navbar-link">
									my Diary
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
