'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Region extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasOne(models.Projet);
      // define association here
    }
  }
  Region.init({
    id:{ type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true },
    intitule: {type:DataTypes.STRING,allowNull:false}
  }, {
    createdAt: false,
    updatedAt: false,
    sequelize,
    modelName: 'Region',
  });
  return Region;
};