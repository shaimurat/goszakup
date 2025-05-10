import { Router } from 'express';
import { getSamrukLots } from '../controllers/samruk.controller';

const router = Router();

router.get('/', getSamrukLots);

export default router;