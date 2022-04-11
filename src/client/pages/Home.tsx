import { Link } from "react-router-dom";

import "../styles/home.css";

export interface IHomeProps {
	isLoggedIn: boolean;
}

const Home = (props: IHomeProps) => {
	const {isLoggedIn} = props;

	return (
		<div className="home-page">
			<h1>Get in tune with your <span className="home-title">emotions</span> &</h1>
			<h2>keep track of your mood with <span className="home-title">MoodLifter</span></h2>
			<Link to='/signup'>
				<button className="home-btn">Start</button>
			</Link>
		</div>
	);
};

export default Home;

// isLoggedIn ? '/feeling' : '/signup'