import React from "react";
import {RiArticleFill} from 'react-icons/ri';
import {AiFillVideoCamera}from 'react-icons/ai'
import DiaryForm from "../components/DiaryForm";

import "../styles/recommendation.css";

const Recommendation = () => {
	return (
		<div className="recom-page">
			<div className="quote-container">
				<h1>“The purpose of our lives is to be happy.”</h1>
				<p className="quote-author">— Eleanor Roosevelt</p>
			</div>

			<h3 className="subtitle">Sorry that you feel worried</h3>
			<p>There are some tips that can help you to feel better</p>

			<div className="advice-container">
				<ul>
					<li>Cry it out</li>
					<li>Exercise</li>
					<li>Shower or bathe in warm water</li>
					<li>Acknowledge your feelings</li>
					<li>Practice mindfulness</li>
				</ul>
			</div>

			<div className="diary-container">
				<div className="journal">
					<h3>Do you know journaling can improve your mood ? </h3>
					<button>Write</button>
				</div>

				<DiaryForm />
			</div>

			<h3>Still not feeling good? checkout our articles and videos.</h3>

			<div className="article-container">
				<ul className="article">
					<li>
						<p className="article-title">
							<RiArticleFill/>Four Ways Sadness May Be Good for You
						</p>
						<p className="article-content">
							Scientists are finding out how sadness works in the brain—and
							they're discovering that it can confer important advantages.
						</p>
						<a
							href="https://greatergood.berkeley.edu/article/item/four_ways_sadness_may_be_good_for_you "
							className="article-link"
						>
							Click here
						</a>
					</li>

					<li>
						<p className="article-title"><RiArticleFill/>yay or You</p>
						<p className="article-content">
							Scientists are finding out how sadness works in the brain—and
							they're discovering that it can confer important advantages.
						</p>
						<a
							href="https://greatergood.berkeley.edu/article/item/four_ways_sadness_may_be_good_for_you "
							className="article-link"
						>
							Click here
						</a>
					</li>
				</ul>
			</div>

			<div className="video-container">
				<ul className="video">
					<li>
						<p className="video-title">
							<AiFillVideoCamera/>6 Differences Between Sadness and Depression
						</p>
						<p>
							sadness is more of an emotional reaction and generally short term
							lasting no more than a few days. In this video, Psych2Go shares 6
							important distinctions to help you understand the difference
							between sadness and depression. Share this video with those who
							could benefit.{" "}
						</p>
						<a
							href="https://greatergood.berkeley.edu/article/item/four_ways_sadness_may_be_good_for_you "
							className="article-link"
						>
							Click here
						</a>
					</li>

					<li>
						<p className="video-title">
							<AiFillVideoCamera/>How to cope with anxiety | Olivia Remes | TEDxUHasselt
						</p>
						<p>
							s is more of an emotional reaction and generally short term
							lasting no more than a few days. In this video, Psych2Go shares 6
							important distinctions to help y
						</p>
						<a
							href="https://greatergood.berkeley.edu/article/item/four_ways_sadness_may_be_good_for_you "
							className="article-link"
						>
							Click here
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Recommendation;
