import { Router } from 'express';
import { getGoszakupLots } from '../controllers/goszakup.controller';

const router = Router();

router.get('/', getGoszakupLots);

export default router;