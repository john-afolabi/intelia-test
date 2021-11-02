'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'bookings',
      {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.literal('uuid_generate_v4()'),
          primaryKey: true,
          unique: true,
          validate: {
            isUUID: {
              args: 4,
              msg: 'id must be uuid',
            },
          },
        },
        userId: {
          allowNull: false,
          type: Sequelize.UUID,
        },
        carId: {
          allowNull: false,
          type: Sequelize.UUID,
        },
        isActive: {
          allowNull: false,
          defaultValue: true,
          type: Sequelize.BOOLEAN,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        deletedAt: {
          type: Sequelize.DATE,
        },
      },
      {
        paranoid: true,
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('bookings');
  },
};
