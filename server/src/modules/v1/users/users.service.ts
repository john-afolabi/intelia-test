import { User, ExcludedAttribs } from '../../../types';
import { createError, AuthenticateUser } from '../../common/utils';
import db from '../../../database/models';

type Props = Omit<User, ExcludedAttribs>;

export default class Users {
  model = db.user;

  private id;

  constructor(userId: string = '') {
    this.id = userId;
  }

  public async loginAccount(params: Partial<User>) {
    const user = await this.model
      .findOne({
        where: {
          email: params.email,
        },
        attributes: { exclude: ['password'] },
      })
      .catch((e) => {
        throw createError('Invalid Email', 404);
      });

    const token = AuthenticateUser({ id: user.id });
    return { token, user };
  }
}
