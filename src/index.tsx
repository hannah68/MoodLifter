import React from "react";
import ReactDOM from "react-dom";
import App from "./client/App";
import { BrowserRouter as Router } from "react-router-dom";

import "../src/client/styles/style.css";

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<App />
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);
