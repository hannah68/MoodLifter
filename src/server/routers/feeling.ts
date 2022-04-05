import {Router} from 'express';

import {createFavourite} from '../controllers/feeling';

const router = Router();

router.post('/favourite', createFavourite);

export default router;
