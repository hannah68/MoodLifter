import "../styles/profile.css";
import {
	BsFillChatRightQuoteFill,
	BsFillJournalBookmarkFill,
} from "react-icons/bs";
import { GoDeviceCameraVideo } from "react-icons/go";
import { FaBook } from "react-icons/fa";

import { RecommendationType } from "../interfaces";

import { uniqueArrHandler } from "../utils/utils";

export interface IProfileProps {
	savedQuote: RecommendationType["quote"];
	savedArticle: RecommendationType["article"];
	savedVideo: RecommendationType["video"];
}

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
					{savedQuote
						? checkUniqueQuote().map((quote, index: number) => {
								return (
									<li key={index}>
										<span>
											<BsFillChatRightQuoteFill />
										</span>
										{quote.text}
									</li>
								);
						  })
						: "There is not any Favourite quote"}
				</ul>
			</div>
			<div className="read-container">
				<h2>Articles to read later</h2>
				<ul className="article-save-list">
					{savedArticle
						? checkUniqueArticle().map((article, index: number) => {
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
						: "There is not any article to read"}
				</ul>
			</div>
			<div className="see-container">
				<h2>Videos to watch later</h2>
				<ul className="video-save-list">
					{savedVideo
						? checkUniqueVideo().map((video, id: number) => {
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
						: "There is not any video to watch"}
				</ul>
			</div>
			<div className="diary-save-container">
				<h2>My Diaries</h2>
				<ul className="diary-list">
					<li>
						<p>
							<span>
								<BsFillJournalBookmarkFill />
							</span>
							readable content of a page when looking at its layout. The point
							of using Lorem Ipsum is that it has a more-or-less normal
							distribution of letters, as opposed to using 'Content here,
							content here', making it look like readable English.
						</p>
					</li>
					<li>
						<p>
							<span>
								<BsFillJournalBookmarkFill />
							</span>
							0s, when an unknown printer took a galley of type and scrambled it
							to make a type specimen book. It has survived not only five
							centuries, but also the leap into{" "}
						</p>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Profile;
