import { Router } from 'express';
import users from './users/user.routes';
import cars from './cars/cars.routes';

const router = Router();

router.use('/user', users);
router.use('/car', cars);

export default router;
