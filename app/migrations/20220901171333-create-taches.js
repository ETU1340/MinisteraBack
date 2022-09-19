'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Taches', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      debut: {
        type: Sequelize.DATE
      },
      fin: {
        type: Sequelize.DATE
      },
      titre: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      output: {
        type: Sequelize.STRING
      },
      idStatus: {
        type: Sequelize.INTEGER
      },
      idPriority: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Taches');
  }
};