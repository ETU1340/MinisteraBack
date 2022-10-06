'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Probleme extends Model {

        static associate(models) {
            this.hasOne(models.ProblemeTache);
        }
    }
    Probleme.init({

        labele: {
            type: DataTypes.STRING, allowNull: true
        },

    }, {
        sequelize,
        modelName: 'Probleme',
    });
    return Probleme;
};