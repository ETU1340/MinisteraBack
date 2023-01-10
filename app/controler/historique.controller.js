const models = require("../models");
const HistoriqueModel = models.Historique;
exports.getAllHistorique = (req, res) => {
  console.log("================================");
  HistoriqueModel.findAll().then(data => {
    res.send(data);
  })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

exports.AjoutHistorique = (req, res) => {
  console.log("================================");
  HistoriqueModel.create({
    id_tache: req.body.id_tache,
    id_statut: req.body.id_statut
  }).then(res.send({ message: "Historique was registered successfully!" }))
    .catch(err => {
      res.status(500).send({ message: err.message });
    });

};

exports.Mihaja = (req, res) => {
  console.log("================================", req.body.labele);

  HistoriqueModel.create({
    labele: req.body.labele
  })
    .then(rep => {
      console.log(rep)
      // res.send({ message: "Historique was registered successfully!" })
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });

};
