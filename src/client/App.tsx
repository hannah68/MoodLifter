import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Feeling from "./pages/Feeling";
import Profile from "./pages/Profile";
import Recommendation from "./pages/Recommendation";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Header from "./components/Header";

import { USER_URL } from "./utils/config";

import {RegisteredUserType} from './interfaces';

const App = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [user, setUser] = useState<RegisteredUserType['data'] | null>(null);

	useEffect(() => {
		localStorage.getItem(localStorage.token)
			? setIsLoggedIn(true)
			: setIsLoggedIn(false);
	}, []);

	useEffect(() => {
		if (!isLoggedIn) {
			return;
		}
		const id = localStorage.getItem(localStorage.userId);
		const auth = localStorage.getItem(localStorage.token) as string;

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
	}, [isLoggedIn, user]);

	console.log(user);

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
					<Route path="/feeling" element={<Feeling />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/recommendation" element={<Recommendation />} />
					<Route path="/signin" element={<Signin setIsLoggedIn={setIsLoggedIn}/>} />
					<Route path="/signup" element={<Signup setUser={setUser} setIsLoggedIn={setIsLoggedIn}/>} />
				</Routes>
			</div>
		</>
	);
};

export default App;
