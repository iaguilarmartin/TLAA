import { NextFunction, Request, Response } from 'express';

class PeopleController {
  // TODO: don't forget to adjust people.route.ts
  public prescribeToPeople = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    // TODO: use req.body to pull passed into it
    try {
      // TODO: add service call
      res.status(200).json({});
    } catch (error) {
      next(error);
    }
  };
}

export default PeopleController;
