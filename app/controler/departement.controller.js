const models = require("../models");
const DepartementModel = models.Departement;

exports.getAllDept = (req, res) => {
  console.log("================================");
  DepartementModel.findAll().then(data => {
    res.send(data);
  })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

exports.AjoutDept = (req, res) => {
  console.log("================================");
  DepartementModel.create({
    intitule: req.body.intitule
  }).then(res.send({ message: "Departement was registered successfully!" }))
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};
