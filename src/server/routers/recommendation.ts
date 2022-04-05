import { Router } from 'express';

import { getArticle} from '../controllers/recommendation';

const router = Router();

router.get('/:feeling', getArticle);

export default router;