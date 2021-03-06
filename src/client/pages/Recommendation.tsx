import { RiArticleFill } from "react-icons/ri";
import { AiFillVideoCamera } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { FaHandPointRight } from "react-icons/fa";

import { iconStyle, iconStyleSize } from "../utils/utils";

import { Quote, Article, Video } from "../../server/interface/interfaces";

import { RecommendationType, FavouriteType } from "../interface/interfaces";

import "../styles/recommendation.css";

// recommendation props interface=======================
export interface IRecommendationProps {
	recomData: RecommendationType[];
	favouriteData: FavouriteType;
	setSavedQuote: (target: RecommendationType["quote"]) => void;
	savedQuote: RecommendationType["quote"];
	savedArticle: RecommendationType["article"];
	setSavedArticle: (target: RecommendationType["article"]) => void;
	savedVideo: RecommendationType["video"];
	setSavedVideo: (target: RecommendationType["video"]) => void;
}

// Recommendation component =============================
const Recommendation = (props: IRecommendationProps) => {
	const {
		recomData,
		favouriteData,
		setSavedQuote,
		savedQuote,
		savedArticle,
		setSavedArticle,
		savedVideo,
		setSavedVideo,
	} = props;
	const [article, video, advice, quote] = recomData;

	const typeOfFeeling = quote.quote.map((qt) => {
		return qt.quoteType;
	});

	const quoteHandler = async (quote: Quote) => {
		setSavedQuote([...savedQuote, quote]);
	};

	const articleHandler = (article: Article) => {
		setSavedArticle([...savedArticle, article]);
	};

	const videoHandler = (video: Video) => {
		setSavedVideo([...savedVideo, video]);
	};

	return (
		<div className="recom-page">
			{/* quote section */}
			{quote.quote.map((qt, index: number) => {
				return (
					<div className="quote-container" key={index}>
						<div className="quote-title">
							<h3>“{qt.text}”</h3>
							<span onClick={() => quoteHandler(qt)}>
								{" "}
								<AiFillHeart style={iconStyleSize} />
							</span>
						</div>

						<p className="quote-author">— {qt.author}</p>
					</div>
				);
			})}
			{/* subtitle section */}
			<h3 className="subtitle">
				Sorry that you feel{" "}
				<span className="recom-sub">{typeOfFeeling[0]}</span>
			</h3>
			<p>There are some tips that can help you to feel better</p>

			{/* Advice section */}
			<div className="advice-container">
				<ul className="advice-container-list">
					{advice.advice.map((ad, index) => {
						return (
							<li className="advice-list" key={index}>
								{ad.text.split(",").map((txt, index) => {
									return (
										<div key={index} className="group-list">
											<span>
												<FaHandPointRight style={iconStyle} />
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

			{/* favourite users answers */}
			<ul className="fav-container">
				<li>
					Do you want to talk to your favourite person?{" "}
					<span className="fav-res">{favouriteData.favPerson}</span>
				</li>
				<li>
					Why don't you go to ...
					<span className="fav-res">{favouriteData.favPlace}</span>
				</li>
				<li>
					Do you want to order...
					<span className="fav-res">{favouriteData.favFood}</span>
				</li>
				<li>
					Imagin life without ...
					<span className="fav-res">{favouriteData.gratitude}</span>
				</li>
				<li>
					Remember your passion...
					<span className="fav-res">{favouriteData.passion}</span>
				</li>
				<li>
					think about your accomplishment...
					<span className="fav-res">{favouriteData.accomplishment}</span>
				</li>
			</ul>

			<h3 className="content-container">
				Still not feeling good? checkout our articles and videos.
			</h3>

			{/* article section */}
			<div className="article-container">
				<ul className="article-list">
					{article.article.map((art, index) => {
						return (
							<li key={index}>
								<div className="article-title">
									<div className="article">
										<span>
											<RiArticleFill style={iconStyle} />
										</span>
										<span>{art.title}</span>
									</div>
									<span onClick={() => articleHandler(art)}>
										<AiFillHeart style={iconStyle} />
									</span>
								</div>
								<p className="article-content">{art.content}...</p>
								<a href={art.link} className="article-link">
									Read more
								</a>
							</li>
						);
					})}
				</ul>
			</div>
			{/* video section */}
			<div className="video-container">
				<ul className="video-list">
					{video.video.map((vid, index) => {
						return (
							<li key={index}>
								<div className="video-title">
									<div className="video">
										<span>
											<AiFillVideoCamera style={iconStyle} />
										</span>
										<span>{vid.title}</span>
									</div>
									<span onClick={() => videoHandler(vid)}>
										<AiFillHeart style={iconStyle} />
									</span>
								</div>
								<p className="video-content">{vid.content}...</p>
								<a href={vid.link} className="article-link">
									Watch here
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
