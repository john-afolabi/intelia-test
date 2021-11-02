import { createError } from '../../common/utils';
import db from '../../../database/models';
import { BookingInstance } from '../../../database/models/booking';

export default class Bookings {
  model = db.bookings;

  private id;

  private userId;

  private booking: BookingInstance;

  constructor(id: string = '', userId: string = '') {
    this.id = id;
    this.userId = userId;
  }

  public async createBooking(params) {
    const booking = await this.model.create(params).catch((e) => {
      throw e;
    });

    return booking;
  }

  public async findUserBookings() {
    const bookings = await this.model
      .findAndCountAll({
        where: {
          userId: this.userId,
        },
      })
      .catch((e) => {
        throw e;
      });

    if (bookings.count) {
      return bookings.rows;
    }

    throw createError('User has no bookings', 404);
  }

  public async getAllBookings() {
    const bookings = await this.model.findAndCountAll().catch((e) => {
      throw e;
    });
    if (bookings.count) {
      return bookings.rows;
    }
    throw createError('There is no bookings', 404);
  }
}
