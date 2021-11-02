'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'cars',
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
        brand: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        model: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        color: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        year: {
          allowNull: false,
          type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('cars');
  },
};
