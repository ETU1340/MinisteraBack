'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Priorite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.Tache); 
    }
  }
  Priorite.init({
    labele: {type:DataTypes.STRING,allowNull:false},
    config: {type:DataTypes.DECIMAL,allowNull:false}
  }, {
    createdAt: false,
    updatedAt: false,
    sequelize,
    modelName: 'Priorite',
    freezeTableName:true
  });
  return Priorite;
};