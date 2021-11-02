import { Models, Car } from '../../types';
import { Model, Sequelize, DataTypes, Optional } from 'sequelize';

interface CarCreationAttributes extends Optional<Car, 'id'> {}

export interface CarInstance extends Model<Car, CarCreationAttributes>, Car {}

export default function CarModel(sequelize: Sequelize) {
  const car = sequelize.define<CarInstance>(
    'cars',
    {
      id: {
        unique: true,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        validate: {
          isUUID: {
            args: 4,
            msg: 'id must be uuid',
          },
        },
      },
      brand: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      model: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      color: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      year: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      deletedAt: {
        type: DataTypes.DATE,
      },
    },
    {
      paranoid: true,
    }
  );

  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  // @ts-ignore
  car.associate = (models: Models) => {
    car.hasMany(models.bookings);
  };

  return car;
}
