'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class historique extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here 
    
    }
  }
  historique.init({
    id_tache: {type:DataTypes.STRING,allowNull:false},
    id_statut: {type:DataTypes.STRING,allowNull:false}
  }, {
    createdAt: false,
    updatedAt: false,
    sequelize,
    modelName: 'Historique',
  });
  return historique;
};