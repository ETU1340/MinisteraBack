'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Departement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.Projet);
      this.hasOne(models.User);
    }
  }
  Departement.init({
    intitule: {type:DataTypes.STRING(20),allowNull:false},
    glossaire:{type:DataTypes.STRING(100),allowNull:false}

  }, {
    createdAt: false,
    updatedAt: false,
    sequelize,
    modelName: 'Departement',
    freezeTableName:true
  });
  return Departement;
};