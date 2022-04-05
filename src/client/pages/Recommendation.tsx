import React from "react";
import { RiArticleFill } from "react-icons/ri";
import { AiFillVideoCamera } from "react-icons/ai";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaRegHandPointRight } from "react-icons/fa";

import DiaryForm from "../components/DiaryForm";

import { RecommendationType } from "../interfaces";

import "../styles/recommendation.css";

export interface IRecommendationProps {
	recomData: RecommendationType[];
}

const Recommendation = (props: IRecommendationProps) => {
	const { recomData } = props;
	const [article, video, advice, quote] = recomData;

	const typeOfFeeling = quote.quote.map(qt =>{
		return qt.quoteType
	});

	return (
		<div className="recom-page">
			{quote.quote.map((qt, index: number) => {
				return (
					<div className="quote-container" key={index}>
						<h2>“{qt.text}”</h2>
						<p className="quote-author">— {qt.author}</p>
					</div>
				);
			})}

			<h3 className="subtitle">Sorry that you feel {typeOfFeeling[0]}</h3>
			<p>There are some tips that can help you to feel better</p>

			<div className="advice-container">
				<ul className="advice-container-list">
					{advice.advice.map((ad, index) => {
						return (
							<li className="advice-list" key={index}>
								{ad.text.split(",").map((txt,index) => {
									return (
										<div key={index}>
											<span>
												<FaRegHandPointRight />
											</span>
											<span>{txt}</span>
										</div>
									);
								})}
							</li>
						);
					})}
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
					{article.article.map((art, index) => {
						return (
							<li key={index}>
								<div className="article-title">
									<div className="article">
										<span>
											<RiArticleFill />
										</span>
										<span>{art.title}</span>
									</div>
									<span>
										<AiOutlineHeart />
									</span>
								</div>
								<p className="article-content">{art.content}</p>
								<a href={art.link} className="article-link">
									Click here
								</a>
							</li>
						);
					})}
				</ul>
			</div>

			<div className="video-container">
				<ul className="video-list">
					{video.video.map((vid, index) => {
						return (
							<li key={index}>
								<div className="video-title">
									<div className="video">
										<span>
											<AiFillVideoCamera />
										</span>
										<span>{vid.title}</span>
									</div>
									<span>
										<AiOutlineHeart />
									</span>
								</div>
								<p className="video-content">{vid.content}</p>
								<a href={vid.link} className="article-link">
									Click here
								</a>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default Recommendation;
