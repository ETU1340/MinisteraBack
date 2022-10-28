'use strict';
const { STRING } = require('sequelize');
const {
  Model
} = require('sequelize');

const taches = require('./taches');
module.exports = (sequelize, DataTypes) => {
  class Statut extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.Tache);

      // this.belongsTo(models.Taches);
    }

  }
  Statut.init({
    // id: { 
    //   type: DataTypes.INTEGER,
    //       primaryKey: true ,
    //       autoIncrement:true,
    //       allowNull: false
    //   },
    labele: { type: DataTypes.STRING, allowNull: false }
  }, {
    createdAt: false,
    updatedAt: false,
    sequelize,
    modelName: 'Statut',
    freezeTableName: true,
  });

  return Statut;
};