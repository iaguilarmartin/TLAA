import { Router } from 'express';
import Route from '../interfaces/routes.interface';
import PeopleController from '../controllers/people.controller';

class PeopleRoute implements Route {
  public path = '/people';
  public router = Router();
  public peopleController = new PeopleController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.peopleController.prescribeToPeople);
  }
}

export default PeopleRoute;
