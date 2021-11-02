import { Models, Booking } from '../../types';
import { Model, Sequelize, DataTypes, Optional } from 'sequelize';

interface BookingCreationAttributes extends Optional<Booking, 'id'> {}

interface BookingInstance
  extends Model<Booking, BookingCreationAttributes>,
    Booking {}

export default function BookingModel(sequelize: Sequelize) {
  const booking = sequelize.define<BookingInstance>(
    'bookings',
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
      userId: {
        allowNull: false,
        type: DataTypes.UUID,
      },
      carId: {
        allowNull: false,
        type: DataTypes.UUID,
      },
      isActive: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: true,
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
  booking.associate = (models: Models) => {
    // associations can be defined here
    booking.belongsTo(models.cars, {
      as: 'car',
      foreignKey: 'carId',
      onDelete: 'CASCADE',
      constraints: false,
    });

    booking.belongsTo(models.users, {
      as: 'user',
      foreignKey: 'userId',
      onDelete: 'CASCADE',
      constraints: false,
    });
  };

  return booking;
}
