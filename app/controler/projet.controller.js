// ato za no mireceive data,
//     ato no mfind,
//         ato no mandefa json






//misy erreur ilay res.send message, milla jerena ilay izy
const models = require("../models");
const ProjetModel = models.Projet;

exports.getAllProjet = (req, res) => {
  ProjetModel.findAll().then(data => {
    res.send(data);
  })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};


// by Departement
exports.getProjetByDept = (req, res) => {
  ProjetModel.findAll().then(data => {
    res.send(data);
  })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};


exports.AjoutProjet = (req, res) => {
  console.log("================================");
  ProjetModel.create({
    titre: req.body.titre,
    debut: req.body.debut,
    fin: req.body.fin,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    color: req.body.color,
    // DepartementId: req.body.id_departement,
    // RegionId: req.body.id_region,
  }).then(rep => {
    console.log('huhuNw projet', rep);
    res.send(rep)
  })
    .catch(err => {
      console.log('errorrororo projet', err);

      res.status(500).send({ message: err.message });
    });

};



exports.ProjetByRegion = (req, res) => {
  console.log("================================");
  ProjetModel.findAll({ where: { RegionId: req.params.region } }).then(data => {
    res.send(data);
  })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

exports.ProjetByDepartement = (req, res) => {
  console.log("================================");
  ProjetModel.findAll({ where: { DepartementId: req.params.dept } }).then(data => {
    res.send(data);
  })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};
