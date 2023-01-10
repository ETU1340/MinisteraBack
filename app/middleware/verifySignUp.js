const models = require("../models");
const ROLES = models.ROLES;
const UserModel = models.User;

checkDuplicateUsernameOrEmail = (req, res, next) => {
    // Username
    // console.log( 'gggggggggggggggggggggggggggggggggg'+req.body.username);
    // console.log( 'gggggggggggggggggggggggggggggggggg'+req.body.email);
    // console.log( 'gggggggggggggggggggggggggggggggggg'+req.body.password);
    console.log(UserModel);


    UserModel.findAll({
        where: {
            username: req.body.username
        }
    }).then(user => {
        // console.log('Im in chechDuplicatedUsrNameOrEmail', user);
        console.log(user.length);
        if (user.length>0) {
            return res.send({message:"Erreur! nom deja utilisé!",error:true});
        }
      
            UserModel.findAll({
                where: {
                    email: req.body.email
                }
            }).then(user => {
                if (user.length>0) {
                    console.log('no email');
                    return res.send({
                        message: "Erreur! email deja utilisé!",error:true
                    });
                }
                next();
            });
        
        // Email
       
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