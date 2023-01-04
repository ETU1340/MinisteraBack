'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate(models) {
      this.belongsTo(models.Role);
      this.belongsTo(models.Departement);


      this.hasOne(models.Commentaire);
      this.hasOne(models.Tache);
      }
  }
  User.init({
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
      },
      unique: true,
      allowNull: false
    },
    username: { type: DataTypes.STRING(50), allowNull: false },
    password: { type: DataTypes.STRING(100), allowNull: false },
    isActive: { type: DataTypes.BOOLEAN, allowNull: false },
    initiation: { type: DataTypes.BOOLEAN, defaultValue: false },
    photo:{type: DataTypes.TEXT, allowNull: false }
  }, {
    sequelize,
    modelName: 'User',
    createdAt: false,
    updatedAt: false,
    freezeTableName: true
  });
  return User;
};