const controlerDepartement = require("../controler/departement.controller");
module.exports = function (app) {
    //get All dept
    app.get("/api/departement", controlerDepartement.getAllDept);


    //post projet
    // app.post("/api/projet/AjoutDept", controlerDepartement.AjoutDept);
}