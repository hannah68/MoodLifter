import {useEffect, useState} from "react";
import DiaryForm from "../components/DiaryForm";

import '../styles/goodmood.css';

const GoodMood = () => {
    const [quote, setQuote] = useState('');

    useEffect(() => {
        const fetchQuoteFromApi = async() => {
            const quoteRes = await fetch('https://api.adviceslip.com/advice')
            const quoteData = await quoteRes.json();
            setQuote(quoteData.slip.advice)
        }
        fetchQuoteFromApi();
    }, [])
    
	return (
		<div className="mood-page">
			<h1>Great, you're in a good mood!</h1>
			<div className="quote-container">
				<h2>“{quote}”</h2>
			</div>

            <div className="diary-container">
				<h3>Do you want to write about your feeling ? </h3>
				<DiaryForm />
			</div>

            <div className="sharing-container">
                <h3>You can share your feeling with others here:</h3>
                {/* <div className="sharing">
                    <div className="share">
                        <img src="" alt="" />
                        <p></p>
                    </div>
                </div> */}
            </div>
		</div>
	);
};

export default GoodMood;
