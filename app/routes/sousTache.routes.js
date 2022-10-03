const controlerSousTache = require('../controler/sousTache.controller');
module.exports = function (app) {

    //get All SousTache by idTache
    app.get("/api/sousTacheByTache/:TacheId", controlerSousTache.getSousTacheByTache);


    //save SousTache
    app.post("/api/sousTache/save", controlerSousTache.saveSousTache);
    //update
    app.put("/api/sousTache/update", controlerSousTache.updateSousTache);
    //delete
    app.put("/api/sousTache/update", controlerSousTache.updateSousTache);
}