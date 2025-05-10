import { Request, Response } from 'express';
import { MitworkService } from '../services/mitwork.service';

const mitworkService = new MitworkService();

export const getMitworkLots = async (req: Request, res: Response) => {
  try {
    const lots = await mitworkService.getLots();
    res.json(lots);
  } catch (error) {
    res.status(500).json({ 
      error: 'Failed to fetch mitwork lots',
      details: error instanceof Error ? error.message : 'Unknown error' 
    });
  }
};