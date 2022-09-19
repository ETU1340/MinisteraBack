const models = require("../models");

const TacheAlerteModel = models.tachealerte;


exports.AjoutTacheAlerte=(req, res)=> {
  TacheAlerteModel.create({
    id_tache: req.body.id_tache,
    dateAlerte: req.body.dateAlerte
  }).then(res.send({ message: "TaskAlerte was registered successfully!" }))
  .catch(err => {
    res.status(500).send({message:err.message });
  });
}



exports.TacheAlerteByDate=(req, res)=> {
  console.log("================================");
  TacheAlerteModel.findAll({ where: { DateAlerte: req.params.dateAlerte }}).then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
          });
      });
  };
  


  exports.UpdateStatut=(req, res)=> {
    console.log(req.params.statut);
    console.log(req.params.tache);
    TacheAlerteModel.update(
     {StatutId: req.params.statut},
     {where: { id: req.params.tache }}
    )
    .then(res.send({ message: "Task was update successfully!" }))
    .catch(err => {
      res.status(500).send({message:err.message });
    });
  };
  