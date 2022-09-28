'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Commentaire extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            this.belongsTo(models.Tache);
        }
    }
    Commentaire.init({
        intitule: { type: DataTypes.TEXT, allowNull: false }

    }, {
        // createdAt: false,
        // updatedAt: false,
        sequelize,
        modelName: 'Commentaire',
        freezeTableName: true
    });
    return Commentaire;
};