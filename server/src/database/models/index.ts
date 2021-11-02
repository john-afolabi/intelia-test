import { Sequelize } from 'sequelize';

import dbconfig from '../config/config';
import UserModel from './user';
import CarModel from './car';

const { NODE_ENV = 'development' } = process.env;

const config = dbconfig[NODE_ENV];

let sequelize: Sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

const db = {
  sequelize,
  Sequelize,
  // Add models here e.g cards: cards(sequelize)
  // Doing this manually to enable auto complete when destructuring
  user: UserModel(sequelize),
  car: CarModel(sequelize),
};

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

export default db;