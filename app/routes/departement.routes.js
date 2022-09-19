const controlerDepartement = require("../controler/departement.controller");
module.exports = function (app) {
//get All projet
app.get("/api/projet/AllDept",controlerDepartement.getAllDept);


//post projet
app.post("/api/projet/AjoutDept",controlerDepartement.AjoutDept);
}