import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Feeling from "./pages/Feeling"
import Profile from "./pages/Profile";
import Recommendation from "./pages/Recommendation";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

export interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = (props) => {
	return (
    <>
      <div>Hello</div>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/feeling" element={<Feeling/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/recommendation" element={<Recommendation/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/signup" element={<Signup/>}/>
       </Routes>
    </>
  
  );
};


export default App;
