import { Router } from 'express';

import { getAllFeelingMaterials} from '../controllers/recommendation';

const router = Router();

router.get('/:feeling', getAllFeelingMaterials);

export default router;