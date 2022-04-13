import { Router } from "express";

import {
	createUser,
	loginUser,
	getUserById,
	createProfile,
	createUserJournal,
	getAllUserJournals,
	deleteUserJournal,
} from "../controllers/user";

const router = Router();

router.post("/register", createUser);
router.post("/login", loginUser);
router.get("/:id", getUserById);

router.post("/profile", createProfile);

router.delete("/journal/:journalId", deleteUserJournal);
router.get("/:id/journal", getAllUserJournals);
router.post("/journal", createUserJournal);

export default router;
