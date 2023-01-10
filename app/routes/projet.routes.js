const controlerProjet = require("../controler/projet.controller");
module.exports = function (app) {
    app.use(function (req, res, next) {
        res.setHeader(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
    
    //get All projet
    app.get("/api/projet/projets",controlerProjet.ProjetAllMobile);
    //post projet
    app.post("/api/projet/AjoutProjet",controlerProjet.AjoutProjet);
    //by region
    app.get("/api/projet/ProjetByRegion/:region",controlerProjet.ProjetByRegion);
    //by departement
    app.get("/api/projet/ProjetByDept/:dept",controlerProjet.ProjetByDepartement);

    //by departement
    app.get("/api/projet/ProjetByDeptMobile/:dept",controlerProjet.ProjetByDepartementMobile);
    //get stat projets
    app.get("/api/projet/statProjets/:dept",controlerProjet.StatProjetsByDept);
    app.get("/api/projet/statGlobal",controlerProjet.StatGlobal);
    //get stat projet by user
    app.get("/api/projet/statProjetUser/:idProjet/:idUser",controlerProjet.StatProjetByUser);
    //update projet
    app.put("/api/projet/update",controlerProjet.UpdateProjetDate);
}