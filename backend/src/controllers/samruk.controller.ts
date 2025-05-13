import { Request, Response } from 'express';
import { SamrukService } from '../services/samruk.service';

const samrukService = new SamrukService();

export const getSamrukLots = async (req: Request, res: Response) => {
  try {
    const { status_id, total_price__gte, total_price__lte, q } = req.query;

    const filters: Record<string, any> = {};

    if (status_id) filters.status_id = status_id;
    if (total_price__gte) filters.total_price__gte = total_price__gte;
    if (total_price__lte) filters.total_price__lte = total_price__lte;
    if (q) filters.q = q;

    const lots = await samrukService.getLots(filters);
    res.json(lots);
  } catch (error) {
    res.status(500).json({ 
      error: 'Failed to fetch samruk lots',
      details: error instanceof Error ? error.message : 'Unknown error',
    });
  }
};
