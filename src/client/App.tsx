import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Favourite from "./pages/Favourite";
import Feeling from "./pages/Feeling";
import Profile from "./pages/Profile";
import Recommendation from "./pages/Recommendation";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Header from "./components/Header";

const App = () => {
	return (
		<>
			<Header />
			<div className="app">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/favourite" element={<Favourite />} />
					<Route path="/feeling" element={<Feeling />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/recommendation" element={<Recommendation />} />
					<Route path="/signin" element={<Signin />} />
					<Route path="/signup" element={<Signup />} />
				</Routes>
			</div>
		</>
	);
};

export default App;
