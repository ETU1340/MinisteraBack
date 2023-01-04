const controlerCommentaire = require('../controler/commentaire.controller');
module.exports = function (app) {

    //get All Commentaire by idTache
    app.get("/api/commentaireByTache/:TacheId", controlerCommentaire.getAllComsByTache);

    app.get("/api/commentaireByProjet/:ProjetId", controlerCommentaire.getAllComsByProjet);

    //save commentaire
    app.post("/api/commentaire/save", controlerCommentaire.saveComs);

    app.delete("/api/commentaire/delete/:commentaire", controlerCommentaire.DeleteCommentaire);
}