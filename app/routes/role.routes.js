const RoleControler = require("../controler/role.controller");
module.exports = function (app) {
    //get All projet
    app.get("/api/roles", RoleControler.getAllRole);
    // //post projet
    // app.post("/api/projet/AjoutRegion", RoleControler.AjoutRegion);
}