import { Router } from "express";

import { createUser, loginUser, getUserById, createProfile } from "../controllers/user";

const router = Router();

router.post("/register", createUser);
router.post("/login", loginUser);
router.get("/:id", getUserById);
router.post("/profile", createProfile);

export default router;
