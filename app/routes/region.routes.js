const controlerRegion = require("../controler/Region.controller");
module.exports = function (app) {
//get All projet
app.get("/api/projet/AllRegion",controlerRegion.getAllRegion);
//post projet
app.post("/api/projet/AjoutRegion",controlerRegion.AjoutRegion);
}