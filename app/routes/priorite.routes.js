const controlerPriorite = require("../controler/priorite.controller");
module.exports = function (app) {
//get All priorite
app.get("/api/priorite/All",controlerPriorite.getAllPriorite);

}