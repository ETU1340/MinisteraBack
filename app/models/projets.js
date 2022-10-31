'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {

  class Projet extends Model {

    static associate(models) {
      // define association here
      this.hasOne(models.Tache);
      // this.belongsTo(models.Departement);
      // this.belongsTo(models.Region);


    }
  }

  Projet.init({
    debut: { type:DataTypes.DATEONLY, allowNull: false },
    fin: { type:DataTypes.DATEONLY, allowNull: false },
    titre: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    latitude: {
      type: DataTypes.DOUBLE, allowNull: false,
    },
    longitude: {
      type: DataTypes.DOUBLE, allowNull: false
    },
    color: {
      type: DataTypes.STRING
    }
  }, {
    createdAt: false,
    updatedAt: false,
    sequelize,
    modelName: 'Projet',
    freezeTableName: true,
  });
  return Projet;
};