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
        createdAt: false,
        updatedAt: false,
        freezeTableName: true,

    });

    return SousTache;
};