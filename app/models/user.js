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
    }
  }
  User.init({
      // id: { type: DataTypes.INTEGER, primaryKey: true },
      email: {
       type: DataTypes.STRING,
       validate: {
        isEmail: true,
      },
      unique: true,
      allowNull:false
    },
      username:{type:DataTypes.STRING,allowNull:false},
      password:{type:DataTypes.STRING,allowNull:false},
      photo:{type:DataTypes.STRING,allowNull:false}
  },{
    sequelize,
    modelName: 'User',
    createdAt: false,
    updatedAt: false,
    freezeTableName: true,
  });
  return User;
};