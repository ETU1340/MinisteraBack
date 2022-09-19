'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Projets', [{
      debut: new Date(),
      fin: new Date(),
      titre: 'Nouveaux Projet',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Projets', null, {});
  }
};
