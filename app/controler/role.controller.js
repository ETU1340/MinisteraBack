const models = require("../models");
const Role = models.Role;

exports.getAllRole = (req, res) => {
    console.log("================================");
    Role.findAll().then(data => {
        res.send(data);
    })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Roles."
            });
        });
};

// exports.AjoutDept = (req, res) => {
//     console.log("================================");
//     Role.create({
//         intitule: req.body.intitule
//     }).then(res.send({ message: "Departement was registered successfully!" }))
//         .catch(err => {
//             res.status(500).send({ message: err.message });
//         });
// };
