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

import { RegisteredUserType, RecommendationType, FavouriteType} from "./interfaces";

let recomInit: RecommendationType[] = [];
let favInit: FavouriteType = {
	accomplishment: 'string',
	favFood: 'string',
	favPerson: 'string',
	favPlace: 'string',
	gratitude: 'string',
	passion: 'string'
};

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
					<Route path="/" element={<Home isLoggedIn={isLoggedIn}/>} />
					<Route path="/favourite" element={<Favourite />} />
					<Route
						path="/feeling"
						element={<Feeling 
							setRecomData={setRecomData} 
							setfavouriteData={setfavouriteData}
							getFavourites={getFavourites}
							setIsLoggedIn={setIsLoggedIn}
							/>}
					/>
					<Route path="/profile" element={<Profile savedQuote={savedQuote} savedArticle={savedArticle} savedVideo={savedVideo}/>} />
					<Route path="/journal" element={<Journal user={user} />} />
					<Route
						path="/recommendation/badmood"
						element={<Recommendation
							recomData={recomData}
							favouriteData={favouriteData}
							setSavedQuote={setSavedQuote}
							savedQuote={savedQuote}
							setSavedArticle={setSavedArticle}
							savedArticle={savedArticle}
							setSavedVideo={setSavedVideo}
							savedVideo={savedVideo}
							/>}
					/>
					<Route path="/recommendation/goodmood" element={<GoodMood />} />
					<Route
						path="/signin"
						element={<Signin setIsLoggedIn={setIsLoggedIn}/>}
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
