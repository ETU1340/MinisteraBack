const { verifySignUp } = require("../middleware");
const controlerproblemeTache = require("../controler/problemeTache.controller");
module.exports = function (app) {

    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get("/api/problemeOption", controlerproblemeTache.optionProbleme);

    app.get("/api/problemeTache/:TacheId", controlerproblemeTache.getAllByTask);

    app.post("/api/problemeTache/save", controlerproblemeTache.save);
}