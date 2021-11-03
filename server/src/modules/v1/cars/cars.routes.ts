import { NextFunction, Response, Router, Request } from 'express';
import { AuthenticatedRequest } from '../../../types';
import { Authenticate, success, validate } from '../../common/utils';
import Bookings from '../bookings/bookings.service';
import Cars from './cars.service';
import { createBookingRules } from './cars.validators';

const router = Router();

// Get all cars
router.get(
  '/',
  Authenticate,
  validate,
  async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    try {
      const cars = await new Cars().getAllCars();

      return res.status(200).json(success('Cars successfully retrieved', cars));
    } catch (e) {
      return next(e);
    }
  }
);

// Book car
router.post(
  '/book/:id',
  Authenticate,
  createBookingRules(),
  validate,
  async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    try {
      const { id: userId } = req.user;
      const { id } = req.params;

      const booking = await new Bookings().createBooking({ userId, carId: id });
      return res.status(200).json(success('Car booked Successful', null));
    } catch (e) {
      return next(e);
    }
  }
);

export default router;
