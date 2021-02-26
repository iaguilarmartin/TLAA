import { NextFunction, Request, Response } from 'express';
import CoinsService from '../services/coins.service';

class CoinsController {
  public getCoins = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const coinsService = new CoinsService();
      const total = req.query.total;
      if (typeof total !== 'string') throw new Error('Total number not provided');
      const result = await coinsService.getCoins(total);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  };
}

export default CoinsController;
