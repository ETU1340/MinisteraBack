const models = require("../models");

const TacheAlerteModel = models.TacheAlerte;

exports.getAlertBydepartement = (req, res) => {
  TacheAlerteModel.findAll(
    { where: { dateAlerte: new Date() } }
  )
    .then(data => {
      res.send(data);
      console.log(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Alert."
      });
    });
};
