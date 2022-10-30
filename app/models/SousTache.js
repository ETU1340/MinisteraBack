
'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class SousTache extends Model {
        static associate(models) {
            this.belongsTo(models.Tache);
        }
    }
    SousTache.init({
        labele: {
            type: DataTypes.STRING,
            allowNull: false
        },
        isChecked: {
            type: DataTypes.BOOLEAN,
            // allowNull: false
        }
    }, {
        sequelize,
        modelName: 'SousTache',
        freezeTableName: true,

    });

    return SousTache;
};