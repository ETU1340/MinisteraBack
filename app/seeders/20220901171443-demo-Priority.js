'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Priorities', [
      {
        labele: 'Bas',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        labele: 'Moyen',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        labele: 'Haut',
        createdAt: new Date(),
        updatedAt: new Date()
      }
  ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Priorities', null, {});
  }
};
