'use strict';
const {
  Model
} = require('sequelize');
const withDateNoTz = require('sequelize-date-no-tz-postgres');
module.exports = (sequelize, SequelizeDataTypes) => {
  const DataTypes = withDateNoTz(SequelizeDataTypes);
  class TacheAlerte extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Tache)
    }
  }
  TacheAlerte.init({
    dateAlerte: {type:DataTypes.DATE_NO_TZ,allowNull:false}
  }, {
    createdAt: false,
    updatedAt: false,
    sequelize,
    modelName: 'TacheAlerte',
    freezeTableName:true
  });
  return TacheAlerte;
};