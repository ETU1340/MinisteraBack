'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class  Commentaire extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            this.belongsTo(models.User);
        }
    }
    Commentaire.init({
        commentaire: { type:DataTypes.TEXT, allowNull: false },
        typeCom: { type:DataTypes.INTEGER, allowNull: false },
        idObjet:{ type:DataTypes.INTEGER, allowNull: false }

    }, {
        // createdAt: false,
        // updatedAt: false,
        sequelize,
        modelName: 'Commentaire',
        freezeTableName: true
    });
    return  Commentaire;
};