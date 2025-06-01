import {Router} from 'express'
import { getZakupLots } from '../controllers/zakupLots.controller'
const router = Router()
router.get('/', getZakupLots)
export default router