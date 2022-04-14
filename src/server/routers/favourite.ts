import { Router } from "express";

import { createFavourite, getFavouriteById } from "../controllers/favourite";

const router = Router();

router.get("/:id", getFavouriteById);
router.post("/", createFavourite);

export default router;
