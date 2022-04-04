import { Link } from "react-router-dom";

import "../styles/home.css";

const Home = () => {
	return (
		<div className="home-page">
			<h1>Get in tune with your emotions &</h1>
			<h2>keep track of your mood with MoodLifter</h2>
			<Link to="/signup">
				<button className="home-btn">Start</button>
			</Link>
		</div>
	);
};

export default Home;
