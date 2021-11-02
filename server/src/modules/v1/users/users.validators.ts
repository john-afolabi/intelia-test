import { body } from 'express-validator';

export const loginAccountRules = () => [body('email').isEmail()];

export const createBookingRules = () => [body('carId').isUUID()];
