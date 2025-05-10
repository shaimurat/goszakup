import { Request, Response } from 'express';
import { GoszakupService } from '../services/goszakup.service';

const goszakupService = new GoszakupService();

export const getGoszakupLots = async (req: Request, res: Response) => {
  try {
    const lots = await goszakupService.getLots();
    res.json(lots);
  } catch (error) {
    res.status(500).json({ 
      error: 'Failed to fetch goszakup lots',
      details: error instanceof Error ? error.message : 'Unknown error' 
    });
  }
};