const controlerCommentaire = require('../controler/commentaire.controller');
module.exports = function (app) {

    //get All Commentaire by idTache
    app.get("/api/commentaireByTache/:TacheId", controlerCommentaire.getAllComsByTache);

    //save commentaire
    app.post("/api/commentaire/save", controlerCommentaire.saveComs);
}