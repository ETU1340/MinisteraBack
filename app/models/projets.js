'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {

  class Projet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.Tache);
      this.belongsTo(models.Departement);
      this.belongsTo(models.Region);


    }
  }

  Projet.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    debut: { type: DataTypes.DATE, allowNull: false },
    fin: { type: DataTypes.DATE, allowNull: false },
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