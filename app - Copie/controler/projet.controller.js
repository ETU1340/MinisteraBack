const models = require("../models");
const ProjetModel = models.projet;
exports.getAllProjet=(req, res)=> {
console.log("================================");
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


exports.AjoutProjet=(req, res)=> {
  console.log("================================");

console.log(req.body.debut);
console.log(req.body.fin);

  ProjetModel.create({
    titre: req.body.titre,
    debut: req.body.debut,
    fin: req.body.fin
  }).then(res.send({ message: "Projet was registered successfully!" }))
  .catch(err => {
    res.status(500).send({message:err.message });
  });

};
