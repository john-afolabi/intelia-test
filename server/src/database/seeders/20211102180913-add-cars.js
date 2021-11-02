'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('cars', [
      {
        brand: 'Toyota',
        model: 'Corolla',
        year: 2008,
        color: 'black',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        brand: 'Kia',
        model: 'Rio',
        year: 2016,
        color: 'blue',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        brand: 'Honda',
        model: 'Civic',
        year: 2014,
        color: 'red',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        brand: 'Chevorlet',
        model: 'Corvette',
        year: 2020,
        color: 'black',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('cars', null, {});
  },
};
