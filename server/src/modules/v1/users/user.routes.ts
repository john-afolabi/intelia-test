import { NextFunction, Response, Router, Request } from 'express';
import { AuthenticatedRequest } from '../../../types';
import { Authenticate, success, validate } from '../../common/utils';
import Bookings from '../bookings/bookings.service';
import Users from './users.service';
import { loginAccountRules, createBookingRules } from './users.validators';

const router = Router();

// Get user info
router.get(
  '/',
  Authenticate,
  validate,
  async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    try {
      const { id: userId } = req.user;

      const user = await new Users(userId).findUser();

      return res.status(200).json(success('User retrieved successfully', user));
    } catch (e) {
      return next(e);
    }
  }
);

// Login account
router.post(
  '/login',
  loginAccountRules(),
  validate,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email } = req.body;

      const { token, user } = await new Users().loginAccount({ email });

      return res.status(200).json(success('Login Successful', { token, user }));
    } catch (e) {
      return next(e);
    }
  }
);

// Get users bookings
router.get(
  '/booking',
  Authenticate,
  validate,
  async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    try {
      const { id: userId } = req.user;

      const bookings = await new Bookings(null, userId).findUserBookings();

      return res
        .status(200)
        .json(success('User bookings retrieved Successful', bookings));
    } catch (e) {
      return next(e);
    }
  }
);

// Create new bookings
router.post(
  '/booking',
  Authenticate,
  createBookingRules(),
  validate,
  async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    try {
      const { id: userId } = req.user;
      const { carId } = req.body;

      const booking = await new Bookings().createBooking({ userId, carId });

      return res
        .status(200)
        .json(success('Booking created Successful', booking));
    } catch (e) {
      return next(e);
    }
  }
);

export default router;
