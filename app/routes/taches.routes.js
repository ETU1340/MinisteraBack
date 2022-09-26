const controlerTache = require("../controler/tache.controller");
module.exports = function (app) {
    app.use(function (req, res, next) {
        res.setHeader(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
    
    //change status
    app.get("/api/tache/status",controlerTache.ChangeStatus);
    
    //post Tache
    app.post("/api/tache/add/:titre/:description/:output/:debut/:fin/:priorite/:projet",controlerTache.AjoutTache);

    //GET ALL
    app.get("/api/tache/taches",controlerTache.getAllTache);

    //get by  idprojet
    app.get("/api/tache/ByIdProjet/:id_projet",controlerTache.TacheByProjet);

     //update statut
     app.put("/api/tache/updateStatut/:tache/:statut/:titre/:description/:output/:debut/:fin/:alerteur",controlerTache.UpdateStatut);
    
     //delete statut
     app.put("/api/tache/deleteStatut/:tache",controlerTache.DeleteTache);
    
}