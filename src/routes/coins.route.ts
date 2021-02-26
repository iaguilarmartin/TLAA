import { Router } from 'express';
import Route from '../interfaces/routes.interface';
import CoinsController from '../controllers/coins.controller';

class CoinsRoute implements Route {
  public path = '/coins';
  public router = Router();
  public coinsController = new CoinsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.coinsController.getCoins);
  }
}

export default CoinsRoute;
