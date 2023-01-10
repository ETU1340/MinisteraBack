const models = require("../models");
const ActionModel = models.Action;


exports.UpdateAction = (req, res) => {
  // console.log(req.params);
  console.log(req.body);
  // console.log('ilay nandrasan', req.body.PrioriteId);
  ActionModel.update(
    {
      value: req.body.value,
    },
    { where: { RoleId: req.body.idRole,label:req.body.labele } }
  )
    .then(rep => res.send(rep))
    .catch(err => {
      // console.log('------------', err)
      console.log(err)
      // res.status(500).send({ message: err.message });
    });
};


exports.getAction= (req, res) => {
  console.log(req.params);
  ActionModel.findAll({where: { RoleId: req.params.idRole}})
      .then(action => {
          res.send(action);
      })
      .catch(err => {
          res.status(500).send({ message: err.message });
      });
};


