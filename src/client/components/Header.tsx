import { Link, useNavigate } from "react-router-dom";

import "../styles/header.css";

import { RegisteredUserType } from "../interface/interfaces";

import { capitaliseFirstLetter } from "../utils/utils";

import { PAGE_LINK } from "../utils/config";

// Header props interface=============================
export interface IHeaderProps {
	user: RegisteredUserType["data"];
	setUser: (target: RegisteredUserType["data"]) => void;
	isLoggedIn: boolean;
	setIsLoggedIn: (target: boolean) => void;
}

// Header component===================================
const Header = (props: IHeaderProps) => {
	const { setIsLoggedIn, setUser, user, isLoggedIn } = props;
	const navigate = useNavigate();

	// handle click===================================
	const handleClick = () => {
		localStorage.removeItem("token");
		localStorage.removeItem("userId");
		setIsLoggedIn(false);
		setUser(null);
		navigate(PAGE_LINK.HOME);
	};

	// format username================================
	const formatUserName = (user: any) => {
		let username = user.username;
		username = username.toLowerCase();
		return capitaliseFirstLetter(username);
	};

	return (
		<header>
			<nav>
				<div>
					<Link to={PAGE_LINK.HOME} className="logo-link">
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
								<Link to={PAGE_LINK.REGISTER} className="navbar-link">
									Sign up
								</Link>
							</li>
							<li>
								<Link to={PAGE_LINK.LOGIN} className="navbar-link">
									Sign in
								</Link>
							</li>
						</>
					)}
					{isLoggedIn && user && (
						<>
							<li>
								<Link to={PAGE_LINK.PROFILE} className="navbar-link">
									Hi{" "}
									<span className="user-name">
										{formatUserName(props.user)}
									</span>
								</Link>
							</li>
							<li>
								<Link to={PAGE_LINK.FELLING} className="navbar-link">
									Feeling
								</Link>
							</li>
							<li>
								<Link to={PAGE_LINK.JOURNAL} className="navbar-link">
									my Journal
								</Link>
							</li>
							<li onClick={handleClick}>
								<Link to={PAGE_LINK.HOME} className="navbar-link">
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
