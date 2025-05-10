import { Router } from 'express';
import { getMitworkLots } from '../controllers/mitwork.controller';

const router = Router();

router.get('/', getMitworkLots);

export default router;