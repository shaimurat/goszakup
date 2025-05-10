import { Request, Response } from 'express';
import { SamrukService } from '../services/samruk.service';

const samrukService = new SamrukService();

export const getSamrukLots = async (req: Request, res: Response) => {
  try {
    const lots = await samrukService.getLots();
    res.json(lots);
  } catch (error) {
    res.status(500).json({ 
      error: 'Failed to fetch samruk lots',
      details: error instanceof Error ? error.message : 'Unknown error' 
    });
  }
};