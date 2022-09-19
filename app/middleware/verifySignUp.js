const models = require("../models");
const ROLES = models.ROLES;
const UserModel = models.User;

checkDuplicateUsernameOrEmail = (req, res, next) => {
    // Username
    // console.log( 'gggggggggggggggggggggggggggggggggg'+req.body.username);
    // console.log( 'gggggggggggggggggggggggggggggggggg'+req.body.email);
    // console.log( 'gggggggggggggggggggggggggggggggggg'+req.body.password);
    console.log(UserModel);
    UserModel.findOne({
        where: {
            username: req.body.username
        }
    }).then(user => {
        console.log('Im in chechDuplicatedUsrNameOrEmail', user);
        if (user) {
            return res.status(400).send({
                message: "Failed! Username is already in use!"
            });
        }
        // Email
        UserModel.findOne({
            where: {
                email: req.body.email
            }
        }).then(user => {
            if (user) {
                return res.status(400).send({
                    message: "Failed! Email is already in use!"
                });
            }
            next();
        });
    });

    // UserModel.create({
    //     id: 1,
    //     username: "user",
    //     email:
    // });

};

checkRolesExisted = (req, res, next) => {
    if (req.body.roles) {
        for (let i = 0; i < req.body.roles.length; i++) {
            if (!ROLES.includes(req.body.roles[i])) {
                res.status(400).send({
                    message: "Failed! Role does not exist = " + req.body.roles[i]
                });
                return;
            }
        }
    }

    next();
};


const verifySignUp = {
    checkDuplicateUsernameOrEmail: checkDuplicateUsernameOrEmail,
    checkRolesExisted: checkRolesExisted
};


module.exports = verifySignUp;