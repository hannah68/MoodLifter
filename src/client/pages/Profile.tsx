import { useState, useEffect } from "react";
import "../styles/profile.css";
import { BsFillChatRightQuoteFill } from "react-icons/bs";
import { GoDeviceCameraVideo } from "react-icons/go";
import { FaBook } from "react-icons/fa";

import {
	RecommendationType,
	FavUserQuote,
	FavUserArticle,
	FavUserVideo,
	RegisteredUserType,
} from "../interfaces";

import { uniqueArrHandler } from "../utils/utils";

export interface IProfileProps {
	// savedQuote: RecommendationType["quote"];
	// savedArticle: RecommendationType["article"];
	// savedVideo: RecommendationType["video"];
	user: RegisteredUserType["data"];
}

let initQuote: FavUserQuote[] = [];
let initArticle: FavUserArticle[] = [];
let initVideo: FavUserVideo[] = [];

const Profile = (props: IProfileProps) => {
	const { user } = props;

	const [userFavsQuote, setUserFavsQuote] = useState(initQuote);
	const [userFavsArticle, setUserFavsArticle] = useState(initArticle);
	const [userFavsVideo, setUserFavsVideo] = useState(initVideo);

	const fetchUserFavQuote = async () => {
		if(user){
			const userId = user.id;
			const userFavRes = await fetch(
				`http://localhost:4000/user/profile/${userId}/favouriteQuote`
			);
			const userFavData = await userFavRes.json();
			
			if(userFavData){
				setUserFavsQuote(userFavData.data);
			}
		}
		
	};

	const fetchAll = async () => {
		if (user) {
			const userId = user.id;
			
			

			const fetchUserFavVideo = async () => {
				const userFavRes = await fetch(
					`http://localhost:4000/user/profile/${userId}/favouriteVideo`
				);
				const userFavData = await userFavRes.json();
				console.log("video", userFavData);
				if(userFavData){
					setUserFavsVideo(userFavData.data);
				}else{
					await fetchUserFavArticle();
				}
				
			};

			const fetchUserFavArticle = async () => {
				const userFavRes = await fetch(
					`http://localhost:4000/user/profile/${userId}/favouriteArticle`
				);
				const userFavData = await userFavRes.json();
				console.log("article", userFavData);
				
				if(userFavData){
					setUserFavsArticle(userFavData.data);
				}else{
					console.log('here');
				}
			};
			
			await fetchUserFavQuote();
			
		}
	};

	console.log("fav quote", userFavsQuote);
	// console.log("fav article", userFavsArticle);
	// console.log("fav video", userFavsVideo);

	// const checkUniqueQuote = (): RecommendationType["quote"] => {
	// 	return uniqueArrHandler(savedQuote);
	// };

	// const checkUniqueArticle = (): RecommendationType["article"] => {
	// 	return uniqueArrHandler(savedArticle);
	// };

	// const checkUniqueVideo = (): RecommendationType["video"] => {
	// 	return uniqueArrHandler(savedVideo);
	// };

	return (
		<div className="profile-page">
			<div className="quote-save-container">
				<h2>My Favourite quotes</h2>
				<button onClick={() => fetchUserFavQuote()}>see my favourite quote</button>
				<ul className="quote-list">
					{/* {savedQuote
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
						: <li>There is not any Favourite quote</li>} */}
				</ul>
			</div>
			<div className="read-container">
				<h2>Articles to read later</h2>
				<ul className="article-save-list">
					{/* {savedArticle
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
						: <p>There is not any article to read</p>} */}
				</ul>
			</div>
			<div className="see-container">
				<h2>Videos to watch later</h2>
				<ul className="video-save-list">
					{/* {savedVideo
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
						: <p>There is not any video to watch</p>} */}
				</ul>
			</div>
		</div>
	);
};

export default Profile;
