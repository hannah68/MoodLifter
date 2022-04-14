import { Router } from "express";

import { getAllFeelingMaterials } from "../controllers/recommendation";

const router = Router();

router.get("/lowmood/:feeling", getAllFeelingMaterials);

export default router;
