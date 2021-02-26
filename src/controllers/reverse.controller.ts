import { NextFunction, Request, Response } from 'express';

class ReverseController {
  public reverseStuff = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    // TODO: use res.query.??? to get url query params, ??? is name of the query param
    try {
      // TODO: add service call
      res.status(200).json({});
    } catch (error) {
      next(error);
    }
  };
}

export default ReverseController;
