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

    //tokony mbola misy departement
    app.get("/api/Alerte/:departement", controlerTacheAlerte.getAlertBydepartement);
    //GET ALL
    // app.get("/api/tacheAlerte/TacheAlertebyDate", controlerTacheAlerte.TacheAlerteByDate);

}