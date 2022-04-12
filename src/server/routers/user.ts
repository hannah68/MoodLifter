import { Router } from "express";

import {
	createUser,
	loginUser,
	getUserById,
	getUserDiary,
	createUserDiary,
	createProfile,
	saveQuoteForUser,
	getAllFavQuote,
	saveArticleForUser,
	getAllFavArticle,
	saveVideoForUser,
	getAllFavVideo
} from "../controllers/user";

const router = Router();

router.post("/register", createUser);
router.post("/login", loginUser);
router.get("/:id", getUserById);
router.post("/diary", createUserDiary);
router.get("/:id/diary", getUserDiary);
router.post("/profile", createProfile);
router.post('/profile/favouriteQuote', saveQuoteForUser);
router.get('/profile/:id/favouriteQuote', getAllFavQuote);
router.post('/profile/favouriteArticle', saveArticleForUser);
router.get('/profile/:id/favouriteArticle', getAllFavArticle);
router.post('/profile/favouriteVideo', saveVideoForUser);
router.get('/profile/:id/favouriteVideo', getAllFavVideo);

export default router;
