'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Historique extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here 
      this.belongsTo(models.Tache);
      this.belongsTo(models.Statut);
    }
  }
  Historique.init({
  }, {
    createdAt: false,
    updatedAt: false,
    sequelize,
    modelName: 'Historique',
  });
  return Historique;
};