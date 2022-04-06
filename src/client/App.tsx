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

import { USER_URL } from "./utils/config";

import { RegisteredUserType, RecommendationType } from "./interfaces";

let recomInit: RecommendationType[] = [];

const App = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [user, setUser] = useState<RegisteredUserType["data"]>(null);
	const [recomData, setRecomData] = useState(recomInit);

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
					<Route path="/" element={<Home />} />
					<Route path="/favourite" element={<Favourite />} />
					<Route
						path="/feeling"
						element={<Feeling setRecomData={setRecomData} user={user} />}
					/>
					<Route path="/profile" element={<Profile />} />
					<Route
						path="/recommendation"
						element={<Recommendation recomData={recomData} />}
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
