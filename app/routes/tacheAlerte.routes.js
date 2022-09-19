const controlerTacheAlerte = require("../controler/tacheAlerte.controller");
module.exports = function (app) {
    app.use(function (req, res, next) {
        res.setHeader(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
    

    //post Tache Alerte
    app.post("/api/tacheAlerte/add",controlerTacheAlerte.AjoutTacheAlerte);

    //GET ALL
    app.get("/api/tacheAlerte/TacheAlertebyDate",controlerTacheAlerte.TacheAlerteByDate);

}