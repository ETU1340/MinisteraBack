const controlerPriorite = require("../controler/priorite.controller");
module.exports = function (app) {
    app.use(function (req, res, next) {
        res.setHeader(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
  
    app.get("/api/priorites", controlerPriorite.getAllPriorite);

    app.put("/api/priorite/updatePriorite/:priorite", controlerPriorite.UpdatePriorite);


}