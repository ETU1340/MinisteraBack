const models = require("../models");
const PrioriteModel = models.Priorite;



exports.getAllPriorite = (req, res) => {
console.log("qkdodozo");
  PrioriteModel.findAll().then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving tutorials."
        });
    });
};



exports.UpdatePriorite = async (req, res) => {
  // console.log(req.params);
  console.log(req.body.StatutId);
  await PrioriteModel.update(
    {
      labele: req.body.labele,
      config: req.body.config
    },
    { where: { id: req.params.priorite } }
  )
    .then(await res.send({ message: "Task was update successfully!" }))
    .catch(err => {
      // console.log('------------', err)
      res.status(500).send({ message: err.message });
    });
};