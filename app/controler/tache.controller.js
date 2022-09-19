const models = require("../models");

const TacheModel = models.Tache;

exports.getAllTache=(req, res)=> {

  // return un instance de tache
TacheModel.findAll()
  .then(data => {
      let todo = [];
      let inProgress = [];
      let doing = [];
    data.map(tache=>{
      if(tache.dataValues.StatutId === 1) {todo.push(tache.dataValues)}; 
      if(tache.dataValues.StatutId === 2) inProgress.push(tache.dataValues); 
      if(tache.dataValues.StatutId === 3) doing.push(tache.dataValues); 
    })
    let dataFormater = {todo, inProgress, doing}
    res.send(dataFormater);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving tasks."
        });
  });
};

exports.AjoutTache=(req, res)=> {
  TacheModel.create({
    titre: req.body.titre,
    description: req.body.description,
    output: req.body.output,
    debut: req.body.debut,
    fin: req.body.fin,
    StatutId: 1,
    estAlerteur: true
  }).then(res.send({ message: "Task was registered successfully!" }))
  .catch(err => {
    res.status(500).send({message:err.message });
  });
}

/////change status implique insert historique
exports.ChangeStatus=(req, res)=>{
  // TacheModel.delete()
  console.log(req.body.data);
}
// exports.AjoutTache=(req, res)=> {
  // TacheModel.Delete
// };

exports.TacheByProjet=(req, res)=> {
  console.log("================================");
  TacheModel.findAll({ where: { ProjetId: req.params.id_projet }}).then(data => {
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
    TacheModel.update(
     {StatutId: req.params.statut},
     {where: { id: req.params.tache }}
    )
    .then(res.send({ message: "Task was update successfully!" }))
    .catch(err => {
      res.status(500).send({message:err.message });
    });
  };
  