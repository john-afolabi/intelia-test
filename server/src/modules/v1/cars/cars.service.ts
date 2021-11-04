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

    return { count: cars.count, cars: cars.rows };
  }
}
