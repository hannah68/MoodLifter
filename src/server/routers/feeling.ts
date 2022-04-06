import {Router} from 'express';

import {createFavourite, getFavouriteById} from '../controllers/feeling';

const router = Router();

router.post('/favourite', createFavourite);
router.get('/favourite/:id', getFavouriteById);

export default router;
