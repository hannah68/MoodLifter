import { useEffect, useState } from "react";

import "../styles/goodmood.css";

import { EXTERNAL_API } from "../utils/config";

const GoodMood = () => {
	const [quote, setQuote] = useState("");

	useEffect(() => {
		const fetchQuoteFromApi = async () => {
			const quoteRes = await fetch(EXTERNAL_API );
			const quoteData = await quoteRes.json();
			setQuote(quoteData.slip.advice);
		};
		fetchQuoteFromApi();
	}, []);

	return (
		<div className="mood-page">
			<h1>Great, you're in a good mood!</h1>
			<div className="quote-container">
				<h2>“{quote}”</h2>
			</div>
			<div className="sharing-container">
				<h3>You can share your feeling with others here:</h3>
				<div className="sharing">Creating a forum In progress here...</div>
			</div>
		</div>
	);
};

export default GoodMood;
