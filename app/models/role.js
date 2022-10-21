
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
      // this.belongsToMany(models.User, {
      //     through: "user_roles",
      //     foreignKey: "roleId",
      //     otherKey: "userId"
      // });

      // models.User.belongsToMany(this, {
      //     through: "user_roles",
      //     foreignKey: "userId",
      //     otherKey: "roleId"
      // });
    }
  }
  Role.init({

    name: {
      type: DataTypes.STRING, allowNull: false
    }

  }, {
    sequelize,
    modelName: 'Role',
  });
  return Role;
};