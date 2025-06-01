import {Request, Response} from 'express'
import { ZakupLotsService } from '../services/zakupLots.service'
const zakupLotsService = new ZakupLotsService

export const getZakupLots = async (req: Request, res: Response) => {
    try {
        const { system_id__in, status_id, total_price__gte, total_price__lte, q } = req.query; 
        const filters: Record<string, any> = {};
        if(status_id) filters.status_id = status_id;
        if(system_id__in) filters.system_id__in = system_id__in
        if (total_price__gte) filters.total_price__gte = total_price__gte;
        if (total_price__lte) filters.total_price__lte = total_price__lte;
        const lots = await zakupLotsService.getLots(filters)
        res.json(lots)
        }catch(error){
            res.status(500).json({
                error: 'Failed to fetch zakup lots',
                details: error instanceof Error ? error.message : 'Unknown error',
            })
        }
}