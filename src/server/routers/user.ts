import { Router } from "express";

import { createUser, loginUser, getUserById, createProfile, createUserJournal, getUserJournal, deleteUserJournal } from "../controllers/user";

const router = Router();

router.post("/register", createUser);
router.post("/login", loginUser);
router.get("/:id", getUserById);
router.post("/profile", createProfile);
router.delete("/journal/:journalId", deleteUserJournal);
router.post("/journal", createUserJournal);
router.get("/:id/journal", getUserJournal);



export default router;
