const controlerAction = require("../controler/Action.controller");
module.exports = function (app) {

//post projet
app.put("/api/action/Update",controlerAction.UpdateAction);
}