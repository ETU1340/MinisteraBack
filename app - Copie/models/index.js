const config = require("../config/db.config.js");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        host: config.HOST,
        dialect: config.dialect,
        operatorsAliases: false,
        pool: {
            max: config.pool.max,
            min: config.pool.min,
            acquire: config.pool.acquire,
            idle: config.pool.idle
        }
    }
);


//configuration models
const model = {};

model.Sequelize = Sequelize;
model.sequelize = sequelize;

model.user = require("../models/user.model.js")(sequelize, Sequelize);
model.role = require("../models/role.model.js")(sequelize, Sequelize);
model.projet = require("../models/projet.model.js")(sequelize, Sequelize); 


//gestion des foreign key
model.role.belongsToMany(model.user, {
    through: "user_roles",
    foreignKey: "roleId",
    otherKey: "userId"
});

model.user.belongsToMany(model.role, {
    through: "user_roles",
    foreignKey: "userId",
    otherKey: "roleId"
});

// model.projet.belongsToMany(model.projet, {
//     through: "projets",
//     foreignKey: "userId",
//     otherKey: "id"
// });


// ty zao no mbola tsu  aiko 
model.ROLES = ["user", "admin", "moderator"];

module.exports = model;