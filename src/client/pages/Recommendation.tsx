import React from "react";
import { RiArticleFill } from "react-icons/ri";
import { AiFillVideoCamera } from "react-icons/ai";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaRegHandPointRight } from "react-icons/fa";

import DiaryForm from "../components/DiaryForm";

import "../styles/recommendation.css";

const Recommendation = () => {
	return (
		<div className="recom-page">
			<div className="quote-container">
				<h2>“The purpose of our lives is to be happy.”</h2>
				<p className="quote-author">— Eleanor Roosevelt</p>
			</div>

			<h3 className="subtitle">Sorry that you feel worried</h3>
			<p>There are some tips that can help you to feel better</p>

			<div className="advice-container">
				<ul className="advice-container-list">
					<li className="advice-list">
						<span>
							<FaRegHandPointRight />
						</span>
						<span>Cry it out</span>
					</li>
					<li className="advice-list">
						<span>
							<FaRegHandPointRight />
						</span>
						<span>Exercise</span>
					</li>
					<li className="advice-list">
						<span>
							<FaRegHandPointRight />
						</span>
						<span>Shower or bathe in warm water</span>
					</li>
					<li className="advice-list">
						<span>
							<FaRegHandPointRight />
						</span>
						<span>Acknowledge your feelings</span>
					</li>
					<li className="advice-list">
						<span>
							<FaRegHandPointRight />
						</span>
						<span>Practice mindfulness</span>
					</li>
				</ul>
			</div>

			<div className="diary-container">
				<h3>Did you know journaling can improve your mood ? </h3>
				<DiaryForm />
			</div>

			<h3 className="content-container">
				Still not feeling good? checkout our articles and videos.
			</h3>

			<div className="article-container">
				<ul className="article-list">
					<li>
						<div className="article-title">
							<div className="article">
								<span>
									<RiArticleFill />
								</span>
								<span>Four Ways Sadness May Be Good for You</span>
							</div>
							<span>
								<AiOutlineHeart />
							</span>
						</div>
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
						<div className="article-title">
							<div className="article">
								<span>
									<RiArticleFill />
								</span>
								<span>yay or You</span>
							</div>
							<span>
								<AiOutlineHeart />
							</span>
						</div>
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
				<ul className="video-list">
					<li>
						<div className="video-title">
							<div className="video">
								<span>
									<AiFillVideoCamera />
								</span>
								<span>6 Differences Between Sadness and Depression</span>
							</div>
							<span>
								<AiOutlineHeart />
							</span>
						</div>
						<p className="video-content">
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
						<div className="video-title">
							<div className="video">
								<span>
									<AiFillVideoCamera />
								</span>
								<span>
									How to cope with anxiety | Olivia Remes | TEDxUHasselt
								</span>
							</div>
							<span>
								<AiOutlineHeart />
							</span>
						</div>
						<p className="video-content">
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
