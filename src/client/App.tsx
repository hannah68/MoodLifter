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

import { USER_URL, PAGE_LINK, FEELING_URL } from "./utils/config";

import { RegisteredUserType, RecommendationType, FavouriteType} from "./interface/interfaces";

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
				`${FEELING_URL.FAVOURITE_ROOT}${id}`
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
					<Route path={PAGE_LINK.HOME} element={<Home isLoggedIn={isLoggedIn}/>} />
					<Route path={PAGE_LINK.FAVOURITE} element={<Favourite />} />
					<Route
						path={PAGE_LINK.FELLING}
						element={<Feeling 
							setRecomData={setRecomData} 
							setfavouriteData={setfavouriteData}
							getFavourites={getFavourites}
							setIsLoggedIn={setIsLoggedIn}
							/>}
					/>
					<Route path={PAGE_LINK.PROFILE} element={<Profile savedQuote={savedQuote} savedArticle={savedArticle} savedVideo={savedVideo}/>} />
					<Route path={PAGE_LINK.JOURNAL} element={<Journal user={user} />} />
					<Route
						path={PAGE_LINK.RECOMMENDATION_LOW}
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
					<Route path={PAGE_LINK.RECOMMENDATION_GOOD} element={<GoodMood />} />
					<Route
						path={PAGE_LINK.LOGIN}
						element={<Signin setIsLoggedIn={setIsLoggedIn}/>}
					/>
					<Route
						path={PAGE_LINK.REGISTER}
						element={<Signup setUser={setUser} setIsLoggedIn={setIsLoggedIn} />}
					/>
				</Routes>
			</div>
		</>
	);
};

export default App;
