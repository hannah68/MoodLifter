import { Link } from "react-router-dom";

import "../styles/home.css";

import { PAGE_LINK } from "../utils/config";

// Home props interface======================
export interface IHomeProps {
	isLoggedIn: boolean;
}

// Home component============================
const Home = (props: IHomeProps) => {
	const { isLoggedIn } = props;

	return (
		<div className="home-page">
			<h1>
				Get in tune with your <span className="home-title">emotions</span> &
			</h1>
			<h2>
				keep track of your mood with{" "}
				<span className="home-title">MoodLifter</span>
			</h2>
			<Link to={isLoggedIn ? PAGE_LINK.FELLING : PAGE_LINK.REGISTER}>
				<button className="home-btn">Start</button>
			</Link>
		</div>
	);
};

export default Home;
