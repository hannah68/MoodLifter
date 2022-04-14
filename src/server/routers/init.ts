import { Router } from "express";

import { seedMoodDatabase } from "../controllers/init";

const router = Router();

router.post("/", seedMoodDatabase);

export default router;
