import { User } from '../../../types';
import { createError, AuthenticateUser } from '../../common/utils';
import db from '../../../database/models';
import { UserInstance } from '../../../database/models/user';

export default class Users {
  model = db.users;

  private id;

  private user: UserInstance;

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

  public async findUser() {
    if (this.user) return this.user;

    const user = await this.model
      .findOne({
        where: {
          id: this.id,
        },
        attributes: {
          exclude: ['password', 'updatedAt', 'createdAt', 'deletedAt'],
        },
      })
      .catch((e) => {
        throw e;
      });

    if (user) {
      this.user = user;
      return user;
    }

    throw createError('User nor found', 404);
  }
}
