import { NextFunction, Response, Router, Request } from 'express';
import { Authenticate, success, validate } from '../../common/utils';
import Cars from './cars.service';

const router = Router();

// Get all cars
router.get(
  '/',
  Authenticate,
  validate,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const cars = await new Cars().getAllCars();

      return res.status(200).json(success('Cars successfully retrieved', cars));
    } catch (e) {
      return next(e);
    }
  }
);

export default router;
