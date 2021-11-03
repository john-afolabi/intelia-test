import { param } from 'express-validator';

export const createBookingRules = () => [param('id').isUUID()];
