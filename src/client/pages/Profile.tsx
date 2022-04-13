import { BsFillChatRightQuoteFill } from "react-icons/bs";
import { GoDeviceCameraVideo } from "react-icons/go";
import { FaBook } from "react-icons/fa";

import "../styles/profile.css";

import { uniqueArrHandler } from "../utils/utils";

import { RecommendationType } from "../interfaces";

// profile props interface==================================
export interface IProfileProps {
	savedQuote: RecommendationType["quote"];
	savedArticle: RecommendationType["article"];
	savedVideo: RecommendationType["video"];
}

// profile component=======================================
const Profile = (props: IProfileProps) => {
	const { savedQuote, savedArticle, savedVideo } = props;

	const checkUniqueQuote = (): RecommendationType["quote"] => {
		return uniqueArrHandler(savedQuote);
	};

	const checkUniqueArticle = (): RecommendationType["article"] => {
		return uniqueArrHandler(savedArticle);
	};

	const checkUniqueVideo = (): RecommendationType["video"] => {
		return uniqueArrHandler(savedVideo);
	};

	return (
		<div className="profile-page">
			<div className="quote-save-container">
				<h2>My Favourite quotes</h2>
				<ul className="quote-list">
					{savedQuote ? (
						checkUniqueQuote().map((quote, index: number) => {
							return (
								<li key={index}>
									<span>
										<BsFillChatRightQuoteFill />
									</span>
									{quote.text}
								</li>
							);
						})
					) : (
						<li>There is not any Favourite quote</li>
					)}
				</ul>
			</div>
			<div className="read-container">
				<h2>Articles to read later</h2>
				<ul className="article-save-list">
					{savedArticle ? (
						checkUniqueArticle().map((article, index: number) => {
							return (
								<li key={index}>
									<a href={article.link}>
										<span>
											<FaBook />
										</span>
										{article.title}
									</a>
								</li>
							);
						})
					) : (
						<p>There is not any article to read</p>
					)}
				</ul>
			</div>
			<div className="see-container">
				<h2>Videos to watch later</h2>
				<ul className="video-save-list">
					{savedVideo ? (
						checkUniqueVideo().map((video, id: number) => {
							return (
								<li key={id}>
									<a href={video.link}>
										<span>
											<GoDeviceCameraVideo />
										</span>
										{video.title}
									</a>
								</li>
							);
						})
					) : (
						<p>There is not any video to watch</p>
					)}
				</ul>
			</div>
		</div>
	);
};

export default Profile;
