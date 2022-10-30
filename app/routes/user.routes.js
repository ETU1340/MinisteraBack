const { authJwt } = require("../middleware");
const controlerUser = require("../controler/user.controller");

module.exports = function (app) {

app.put("/api/user/Update",controlerUser.UpdateUser);

};