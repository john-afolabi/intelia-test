import { createError } from '../../common/utils';
import db from '../../../database/models';
import { CarInstance } from '../../../database/models/car';

export default class Bookings {
  model = db.cars;

  private id;

  private car: CarInstance;

  constructor(id: string = '') {
    this.id = id;
  }

  public async getAllCars() {
    const cars = await this.model.findAndCountAll().catch((e) => {
      throw e;
    });
    if (cars.count) {
      return { count: cars.count, cars: cars.rows };
    }
    throw createError('There are no cars', 404);
  }
}
