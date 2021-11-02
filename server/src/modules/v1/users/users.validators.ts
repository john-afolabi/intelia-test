import { body } from 'express-validator';

// eslint-disable-next-line import/prefer-default-export
export const loginAccountRules = () => [body('email').isEmail()];
