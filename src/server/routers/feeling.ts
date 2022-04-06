import {Router} from 'express';

import {createFavourite, getFavouriteById} from '../controllers/feeling';

const router = Router();

router.get('/favourite/:id', getFavouriteById);
router.post('/favourite', createFavourite);


export default router;
