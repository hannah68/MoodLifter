import { Router } from "express";

import { createUser, loginUser, getUserById } from "../controllers/user";

const router = Router();

router.post("/register", createUser);
router.post("/login", loginUser);
router.post("/:id", getUserById);

export default router;
