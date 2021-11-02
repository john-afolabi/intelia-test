import { User } from '../../../types';
import { createError, AuthenticateUser } from '../../common/utils';
import db from '../../../database/models';

export default class Users {
  model = db.users;

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
        attributes: {
          exclude: ['password', 'updatedAt', 'createdAt', 'deletedAt'],
        },
      })
      .catch((e) => {
        throw e;
      });

    if (!user) throw createError('Invalid Email', 404);

    const token = AuthenticateUser({ id: user.id });
    return { token, user };
  }
}
