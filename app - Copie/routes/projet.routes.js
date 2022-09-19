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
app.get("/api/projet/projets",controlerProjet.getAllProjet);
//post projet
app.post("/api/projet/AjoutProjet",controlerProjet.AjoutProjet);
}