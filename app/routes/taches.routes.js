const controlerTache = require("../controler/tache.controller");
module.exports = function (app) {
    app.use(function (req, res, next) {
        res.setHeader(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
    //retard Tache to in progress
    app.put("/api/tache/updateRetard", controlerTache.activePrevisionalLate);
    //post Tache
    app.post("/api/tache/add", controlerTache.AjoutTache);
    //GET ALL
    app.get("/api/taches", controlerTache.getAllTache);

    //get by  idprojet
    app.get("/api/tache/ByIdProjet/:id_projet", controlerTache.TacheByProjet);

    //get by  idprojet
    app.get("/api/tache/ByIdProjetMobile/:id_projet", controlerTache.TacheByProjetMobile);

    //update statut mobile?
    app.put("/api/tache/updateMobile", controlerTache.UpdateTacheMobile);
    // app.get("/api/Tache/Taches",controlerTache.getAllTache);

    //update to progress
    app.put("/api/tache/updateToProgress/:tache", controlerTache.UpdateToProgress);


    //update  web
    app.put("/api/tache/update", controlerTache.UpdateTacheWeb);
    // app.get("/api/Tache/Taches",controlerTache.getAllTache);
    //delete mobile
    app.delete("/api/tache/deleteMobile/:tache", controlerTache.DeleteTacheMobile);
    //delete
    app.post("/api/tache/delete", controlerTache.DeleteTache);

}