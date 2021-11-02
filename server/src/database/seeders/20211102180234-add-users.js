'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        name: 'Test1',
        email: 'test1@test.com',
        phone: '08171187007',
        password: 'badPassword',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Test2',
        email: 'test2@test.com',
        phone: '08171187008',
        password: 'badPassword',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
