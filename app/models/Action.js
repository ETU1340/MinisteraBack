// const { Sequelize } = require("sequelize");
// const sequelize = require("sequelize");

// module.exports = (sequelize, Sequelize) => {
//     const Role = sequelize.define("role", {
//         id: {
//             type: Sequelize.INTEGER,
//             primaryKey: true
//         },
//         name: {
//             type: Sequelize.STRING
//         }
//     });
//     return Role;
// }

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Action extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Role);
    }
  }
  Action.init({
    label: {
     type:DataTypes.STRING(20),allowNull:false
    },
    value:
    {
    type:DataTypes.BOOLEAN,allowNull:false
    }

  }, {
    sequelize,
    modelName: 'Action',
    createdAt: false,
    updatedAt: false,
    freezeTableName: true,
  });
  return Action;
};