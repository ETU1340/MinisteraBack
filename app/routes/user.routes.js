const { authJwt } = require("../middleware");
const controlerUser = require("../controler/user.controller");

module.exports = function (app) {

    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.put("/api/user/Update",controlerUser.UpdateUser);
    // app.get("/api/test/all", controlerUser.adminBoard);


    // app.get(
    //     "/api/test/user",
    //     [authJwt.verifyToken],
    //     controlerUser.userBoard
    // );


    // app.get(
    //     "/api/test/mod",
    //     [authJwt.verifyToken, authJwt.isModerator],
    //     controlerUser.moderatorBoard
    // );


    // app.get(
    //     "/api/test/admin",
    //     [authJwt.verifyToken, authJwt.isAdmin],
    //     controlerUser.adminBoard
    // );


};