const models = require("../models");
const RegionModel = models.region;
exports.getAllRegion = (req, res) => {
  console.log("================================");
  RegionModel.findAll().then(data => {
    res.send(data);
  })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};


exports.AjoutRegion = (req, res) => {
  console.log("================================");
  RegionModel.create({
    id_tache: req.body.id_tache,
    id_statut: req.body.id_statut
  }).then(res.send({ message: "Region was registered successfully!" }))
    .catch(err => {
      res.status(500).send({ message: err.message });
    });

};
