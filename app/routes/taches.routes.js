const controlerTache = require("../controler/tache.controller");
module.exports = function (app) {
    app.use(function (req, res, next) {
        res.setHeader(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
    //post Tache
    app.post("/api/tache/add", controlerTache.AjoutTache);
    //GET ALL
    app.get("/api/taches", controlerTache.getAllTache);

    //get by  idprojet
    app.get("/api/tache/ByIdProjet/:id_projet", controlerTache.TacheByProjet);

    
    //get by  idprojet mobile
    app.get("/api/tache/ByIdProjet/:id_projet", controlerTache.TacheByProjetMobile);

   
    //get date debut et fin
    app.get("/api/tache/TacheDate/:id_projet", controlerTache.TacheDate);

    //update statut mobile?
    app.put("/api/tache/update", controlerTache.UpdateTache);
    // app.get("/api/Tache/Taches",controlerTache.getAllTache);

    //update  web
    app.put("/api/tache/update", controlerTache.UpdateTacheWeb);
    // app.get("/api/Tache/Taches",controlerTache.getAllTache);

    //delete
    app.post("/api/tache/delete", controlerTache.DeleteTache);

     //delete
     app.post("/api/tache/deleteMobile", controlerTache.DeleteTacheMobile);

    //update to progress
    app.put("/api/tache/updateToProgress/:tache", controlerTache.UpdateToProgress)
}