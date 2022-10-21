const controlerHistorique = require("../controler/historique.controller");
module.exports = function (app) {
    //get All projet
    app.get("/api/projet/AllHistorique", controlerHistorique.getAllHistorique);
    //post projet
    app.post("/api/projet/AjoutHistorique", controlerHistorique.AjoutHistorique);

    app.post("/mihaja", controlerHistorique.Mihaja);
}