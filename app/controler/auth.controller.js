const models = require("../models");
const config = require("../config/auth.config");
const UserModel = models.User;
const RoleModel = models.Role;
const Op = models.Sequelize.Op;
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
    // Save User to Database
    console.log("================================");
    console.log(req.body.email);
    console.log(req.body.username);
    console.log(req.body.password);
    console.log("================================");
    UserModel.create({
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8)
    })
        .then(user => {
            if (req.body.roles) {
                RoleModel.findAll({
                    where: {
                        name: {
                            [Op.or]: req.body.roles
                        }
                    }
                }).then(roles => {
                    user.setRoles(roles).then(() => {
                        res.send({ message: "User was registered successfully!" });
                    });
                });
            } else {
                // user role = 1
                user.setRoles([1]).then(() => {
                    res.send({ message: "User was registered successfully!" });
                });
            }
        })
        
        .catch(err => { // console.log('EEEEEEEEEEERRRRRRRRRRRRRRRRR');
            res.status(500).send({ message: err.message });
        });
};

exports.signin = (req, res) => {
    console.log(req.body.username, req.body.password, req.body.email);
    UserModel.findOne({
        where: {
            username: req.body.username
        }
    })
        .then(user => {
            if (!user) {
                return res.status(404).send({ message: "User Not found." });
            }
            var passwordIsValid = bcrypt.compareSync(
                req.body.password,
                user.password
            );
            if (!passwordIsValid) {
                return res.status(401).send({
                    accessToken: null,
                    message: "Invalid Password!"
                });
            }
            var token = jwt.sign({ id: user.id }, config.secret, {
                expiresIn: 86400 // 24 hours
            });

            var authorities = [];
            res.send({
                id: user.id,
                username: user.username,
                email: user.email,
                roles: authorities,
                accessToken: token
            });
            // user.getRoles().then(roles => {
            //     for (let i = 0; i < roles.length; i++) {
            //         authorities.push("ROLE_" + roles[i].name.toUpperCase());
            //     }
            //     res.status(200).send({
            //         id: user.id,
            //         username: user.username,
            //         email: user.email,
            //         roles: authorities,
            //         accessToken: token
            //     });
            // });

        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });
};