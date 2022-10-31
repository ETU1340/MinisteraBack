
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasOne(models.Action);

      this.hasOne(models.User);
    }
  }
  Role.init({

    name: {
      type: DataTypes.STRING, allowNull: false
    }

  }, {
    sequelize,
    modelName: 'Role',
    createdAt: false,
    updatedAt: false,
    freezeTableName: true,
  });
  return Role;
};