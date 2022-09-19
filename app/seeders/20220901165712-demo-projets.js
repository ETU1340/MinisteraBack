'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Status', [
      {
        labele:'todo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        labele:'in progress',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        labele:'finish',
        createdAt: new Date(),
        updatedAt: new Date()
      },
  ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Status', null, {});
  }
};
