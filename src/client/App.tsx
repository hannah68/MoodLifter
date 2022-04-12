import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Favourite from "./pages/Favourite";
import Feeling from "./pages/Feeling";
import Profile from "./pages/Profile";
import Recommendation from "./pages/Recommendation";
import GoodMood from "./pages/GoodMood";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Header from "./components/Header";
import Journal from "./pages/Journal";

import { USER_URL } from "./utils/config";

import {
	RegisteredUserType,
	RecommendationType,
	FavouriteType,
	FavUserQuote,
	FavUserArticle,
	FavUserVideo,
} from "./interfaces";


let recomInit: RecommendationType[] = [];
let favInit: FavouriteType = {
	accomplishment: "string",
	favFood: "string",
	favPerson: "string",
	favPlace: "string",
	gratitude: "string",
	passion: "string",
};

let initQuote: FavUserQuote[] = [];
let initArticle: FavUserArticle[] = [];
let initVideo: FavUserVideo[] = [];

const App = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [user, setUser] = useState<RegisteredUserType["data"]>(null);
	const [recomData, setRecomData] = useState(recomInit);
	const [favouriteData, setfavouriteData] = useState<FavouriteType>(favInit);
	const [savedQuote, setSavedQuote] = useState<RecommendationType["quote"]>([]);
	const [savedArticle, setSavedArticle] = useState<
		RecommendationType["article"]
	>([]);
	const [savedVideo, setSavedVideo] = useState<RecommendationType["video"]>([]);

	

	const getFavourites = async () => {
		if (user) {
			const id = user.id;
			const favRes = await fetch(
				`http://localhost:4000/feeling/favourite/${id}`
			);
			const favData = await favRes.json();
			return favData.data;
		}
	};

	console.log(savedQuote)
	// useEffect(() => {
	// 	if (savedQuote && user) {
			
	// 		const postQuoteToDB = async () => {
	// 			for (let i: number = 0; i < savedQuote.length; i++) {
	// 				const quoteRes = await fetch(
	// 					"http://localhost:4000/user/profile/favouriteQuote",
	// 					{
	// 						method: "POST",
	// 						headers: {
	// 							"Content-Type": "application/json",
	// 						},
	// 						body: JSON.stringify({...savedQuote[i], userId: user.id}),
	// 					}
	// 				);
	// 				const quoteData = await quoteRes.json();
					
	// 			}
	// 		};
	// 		postQuoteToDB()
	// 	}
	// 	if(savedArticle && user){
			
	// 		const postArticleToDB = async () => {
	// 			for (let i: number = 0; i < savedArticle.length; i++) {
	// 				const articleRes = await fetch(
	// 					"http://localhost:4000/user/profile/favouriteArticle",
	// 					{
	// 						method: "POST",
	// 						headers: {
	// 							"Content-Type": "application/json",
	// 						},
	// 						body: JSON.stringify({...savedArticle[i], userId: user.id}),
	// 					}
	// 				);
	// 				const articleData = await articleRes.json();
					
	// 			}
	// 		};
	// 		postArticleToDB()
	// 	}
	// 	if(savedVideo && user){
	// 		const postVideoToDB = async () => {
	// 			for (let i: number = 0; i < savedVideo.length; i++) {
	// 				const videoRes = await fetch(
	// 					"http://localhost:4000/user/profile/favouriteVideo",
	// 					{
	// 						method: "POST",
	// 						headers: {
	// 							"Content-Type": "application/json",
	// 						},
	// 						body: JSON.stringify({...savedVideo[i], userId: user.id}),
	// 					}
	// 				);
	// 				const videoData = await videoRes.json();
					
	// 			}
	// 		};
	// 		postVideoToDB();
	// 	}
	// }, [savedQuote, user, savedArticle, savedVideo]);

	useEffect(() => {
		const token = localStorage.getItem("token");
		if (token) {
			setIsLoggedIn(true);
		} else {
			setIsLoggedIn(false);
		}
	}, []);

	useEffect(() => {
		if (isLoggedIn) {
			const id = localStorage.getItem("userId");
			const auth = localStorage.getItem("token") as string;

			const fetchUser = async () => {
				const UserResponse = await fetch(`${USER_URL.USER_ROOT}${id}`, {
					method: "GET",
					headers: {
						Authorization: auth,
					},
				});

				const userData = await UserResponse.json();
				setUser(userData.data);
			};
			fetchUser();
		}
	}, [isLoggedIn]);

	return (
		<>
			<Header
				user={user}
				setUser={setUser}
				isLoggedIn={isLoggedIn}
				setIsLoggedIn={setIsLoggedIn}
			/>
			<div className="app">
				<Routes>
					<Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
					<Route path="/favourite" element={<Favourite />} />
					<Route
						path="/feeling"
						element={
							<Feeling
								setRecomData={setRecomData}
								setfavouriteData={setfavouriteData}
								getFavourites={getFavourites}
								setIsLoggedIn={setIsLoggedIn}
							/>
						}
					/>
					<Route path="/journal" element={<Journal user={user} />} />
					<Route
						path="/profile"
						element={
							<Profile
							user={user}
								// savedQuote={savedQuote}
								// savedArticle={savedArticle}
								// savedVideo={savedVideo}
							/>
						}
					/>
					<Route
						path="/recommendation/badmood"
						element={
							<Recommendation
								recomData={recomData}
								favouriteData={favouriteData}
								setSavedQuote={setSavedQuote}
								savedQuote={savedQuote}
								setSavedArticle={setSavedArticle}
								savedArticle={savedArticle}
								setSavedVideo={setSavedVideo}
								savedVideo={savedVideo}
								user={user}
							/>
						}
					/>
					<Route path="/recommendation/goodmood" element={<GoodMood />} />
					<Route
						path="/signin"
						element={<Signin setIsLoggedIn={setIsLoggedIn} />}
					/>
					<Route
						path="/signup"
						element={<Signup setUser={setUser} setIsLoggedIn={setIsLoggedIn} />}
					/>
				</Routes>
			</div>
		</>
	);
};

export default App;
