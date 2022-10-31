const models = require("../models");
const { QueryTypes } = require('sequelize');

exports.getAlertBydepartement = (req, res) => {
 
  models.sequelize.query(
    'select * from dateAlerte where iddept=:dept',
    {
      replacements:{dept: req.params.departement },
      type: QueryTypes.SELECT
    }).then(data => {
  res.send(data);
  })
  .catch(err => {
 console.log(err);
    });
};
