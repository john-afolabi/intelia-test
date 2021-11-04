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
        include: { as: 'car', model: db.cars },
        attributes: { exclude: ['carId', 'userId'] },
      })
      .catch((e) => {
        throw e;
      });

    return { count: bookings.count, bookings: bookings.rows };
  }

  public async getAllBookings() {
    const bookings = await this.model.findAndCountAll().catch((e) => {
      throw e;
    });

    return { count: bookings.count, bookings: bookings.rows };
  }
}
