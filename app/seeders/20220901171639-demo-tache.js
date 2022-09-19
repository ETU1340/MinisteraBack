'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Taches', [
      {
        debut: new Date(),
        fin: new Date(),
        titre: "login",
        description: "implementation de l'authentification et l'autorisation",
        output: "L'utilisateur peut s'authentifier ",
        idStatus: 1,
        idPriority: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        debut: new Date(),
        fin: new Date(),
        titre: "Authorisation",
        description: "joue un role sur la gestion des contenue",
        output: "L'utilisateur ne peux que voir ces contenue",
        idStatus: 1,
        idPriority: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }

  ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Taches', null, {});
  }
};
