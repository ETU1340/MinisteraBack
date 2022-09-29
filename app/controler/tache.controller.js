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
  console.log('titre:'+req.params.titre);
  console.log('description:'+ req.params.description);
  console.log('output:'+req.params.output);
  console.log('debut:'+req.params.debut);
  console.log('fin:'+req.params.fin)
  console.log('StatutId:1')
  console.log('PrioriteId:'+req.params.priorite)
  console.log('ProjetId:'+req.params.projet,)
  console.log('alerteur:'+ req.params.alerteur)
  TacheModel.create({
    titre: req.params.titre,
    description: req.params.description,
    output: req.params.output,
    debut: req.params.debut,
    fin: req.params.fin,
    StatutId: 1,
    PrioriteId:req.params.priorite,
    ProjetId: req.params.projet,
    estAlerteur: req.params.alerteur
  }).then(res.send({ message: "Task was registered successfully!" }))
  .catch(err => {
   console.log(err.message );
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
  
    TacheModel.update(
      {titre: req.params.titre,
     description: req.params.description,
     output: req.params.output,
     debut: req.params.debut,
     fin: req.params.fin,
     estAlerteur: req.params.alerteur,
     StatutId: req.params.statut},
     {where: { id: req.params.tache }}

     
    )
    .then(res.send({ message: "Task was update successfully!" }))
    .catch(err => {
    console.log(err.message) ;
    });
  };
  

  exports.DeleteTache=(req, res)=> {
    TacheModel.destroy({where: { id: req.params.tache }}
    ).then(res.send({ message: "Task was deleted successfully!" }))
    .catch(err => {
      res.status(500).send({message:err.message });
    });
  }