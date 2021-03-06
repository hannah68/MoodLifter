import "dotenv/config";

import express from "express";
import cors from "cors";
import morgan from "morgan";

// routes here
import userRouter from "./routers/user";
import initDBRouter from "./routers/init";
import favouriteRouter from "./routers/favourite";
import recommendationRouter from "./routers/recommendation";

const port = process.env.PORT || 4000;

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/user", userRouter);
app.use("/init", initDBRouter);
app.use("/favourite", favouriteRouter);
app.use("/recommendation", recommendationRouter);

app.get("*", (req, res) => {
	res.json("server is running");
});

app.listen(port, () => {
	console.log(`server started on port ${port}`);
});
