const controlerTacheAlerte = require("../controler/tacheAlerte.controller");
module.exports = function (app) {


    //post Tache Alerte

    //tokony mbola misy departement
    app.get("/api/Alerte/:departement", controlerTacheAlerte.getAlertBydepartement);
    //GET ALL
    // app.get("/api/tacheAlerte/TacheAlertebyDate", controlerTacheAlerte.TacheAlerteByDate);

}