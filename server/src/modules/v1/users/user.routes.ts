import { NextFunction, Response, Router, Request } from 'express';
import { success, validate } from '../../common/utils';
import Users from './users.service';
import { loginAccountRules } from './users.validators';

const router = Router();

// Login Account
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

export default router;
