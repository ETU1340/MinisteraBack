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
    class ProblemeTache extends Model {

        static associate(models) {
            this.belongsTo(models.Tache);
            this.belongsTo(models.Probleme);
        }
    }
    ProblemeTache.init({

        description: {
            type: DataTypes.STRING, allowNull: true
        },

        isSolved: {
            type: DataTypes.BOOLEAN
        },

    }, {
        sequelize,
        modelName: 'ProblemeTache',
    });
    return ProblemeTache;
};