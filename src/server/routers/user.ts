import { Router } from "express";

import {
	createUser,
	loginUser,
	getUserById,
	getUserDiary,
	createUserDiary,
} from "../controllers/user";

const router = Router();

router.post("/register", createUser);
router.post("/login", loginUser);
router.get("/:id", getUserById);
router.post("/diary", createUserDiary);
router.get("/:id/diary", getUserDiary);


export default router;
