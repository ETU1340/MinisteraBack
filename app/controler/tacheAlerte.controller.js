const models = require("../models");
const TacheAlerte=models.TacheAlerte;
const { QueryTypes } = require('sequelize');

exports.getAlertBydepartement = (req, res) => {
    console.log("kojdfuheufhue")
    models.sequelize.query(
      'select * from "public".datealerte where iddept=:dept',
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
