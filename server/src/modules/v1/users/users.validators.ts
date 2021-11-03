import { body } from 'express-validator';

export const loginAccountRules = () => [body('email').isEmail()];
