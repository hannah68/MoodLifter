import { Link } from "react-router-dom";

import "../styles/home.css";

export interface IHomeProps {
	isLoggedIn: boolean;
}

const Home = (props: IHomeProps) => {
	const {isLoggedIn} = props;

	return (
		<div className="home-page">
			<h1>Get in tune with your emotions &</h1>
			<h2>keep track of your mood with MoodLifter</h2>
			<Link to={isLoggedIn ? '/feeling' : '/signup'}>
				<button className="home-btn">Start</button>
			</Link>
		</div>
	);
};

export default Home;
