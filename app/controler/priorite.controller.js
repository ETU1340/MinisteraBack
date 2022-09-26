const models = require("../models");
const PrioriteModel = models.Priorite;
exports.getAllPriorite=(req, res)=> {
console.log("================================");
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


