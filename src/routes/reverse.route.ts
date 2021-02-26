import { Router } from 'express';
import Route from '../interfaces/routes.interface';
import ReverseController from '../controllers/reverse.controller';

class ReverseRoute implements Route {
  public path = '/reverse';
  public router = Router();
  public reverseController = new ReverseController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.reverseController.reverseStuff);
  }
}

export default ReverseRoute;
