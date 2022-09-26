const models = require("../models");
const { QueryTypes } = require('sequelize');
const TacheAlerteModel = models.TacheAlerte;


exports.AjoutTacheAlerte=(req, res)=> {
  TacheAlerteModel.create({
    id_tache: req.body.id_tache,
    dateAlerte: req.body.dateAlerte
  }).then(res.send({ message: "TaskAlerte was registered successfully!" }))
  .catch(err => {
    res.status(500).send({message:err.message });
  });
}


exports.FindAlerte=(req, res)=> {
  models.sequelize.query( ` SELECT * FROM "public"."TacheAlerte" join "public"."Tache" on "public"."Tache"."id"="public"."TacheAlerte"."TacheId" where "dateAlerte">=CURRENT_DATE and "dateAlerte"< CURRENT_DATE + integer '1' `,
  {
    type: QueryTypes.SELECT
  }).then(data => {
      res.send(data);
      
    })
    .catch(err => {
     console.log(err.message)
      })
    // .finally( models.sequalize.close())

    
  };
  
  


  