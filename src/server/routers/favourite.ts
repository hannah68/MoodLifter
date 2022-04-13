import {Router} from 'express';

import {createFavourite, getFavouriteById} from '../controllers/favourite';

const router = Router();

router.get('/:id', getFavouriteById);
router.post('/favourite', createFavourite);


export default router;
