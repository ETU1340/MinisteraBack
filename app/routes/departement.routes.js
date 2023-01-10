const controlerDepartement = require("../controler/departement.controller");
module.exports = function (app) {
    //get All dept
    app.get("/api/departement/all", controlerDepartement.getAllDept);
    app.get("/api/departement/one/:idDept", controlerDepartement.getDept);


    //post projet
    // app.post("/api/projet/AjoutDept", controlerDepartement.AjoutDept);
}