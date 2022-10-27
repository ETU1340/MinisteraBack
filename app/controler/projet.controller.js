// ato za no mireceive data,
//     ato no mfind,
//         ato no mandefa json






//misy erreur ilay res.send message, milla jerena ilay izy
const models = require("../models");
const ProjetModel = models.Projet;
const { Op } = require("sequelize");
const { QueryTypes } = require('sequelize');
exports.getAllProjet=(req, res)=> {
  ProjetModel.findAll().then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving tutorials."
        });
    });
};


// by Departement
exports.getProjetByDept=(req, res)=> {
  ProjetModel.findAll().then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving tutorials."
        });
    });
};


exports.AjoutProjet=(req, res)=> {
  console.log("================================");
  ProjetModel.create({
    titre: req.body.titre,
    debut: req.body.datedebut,
    fin: req.body.datefin,
    RegionId: req.body.id_region,
    DepartementId: req.body.id_departement,
    latitude:req.body.latitude,
    longitude:req.body.longitude
}).then(res.send({ message: "Projet was registered successfully!" }))
.catch(err => {
  res.status(500).send({message:err.message });
  });

};



exports.ProjetByRegion=(req, res)=> {
  console.log("================================");
  ProjetModel.findAll({ where: { RegionId: req.params.region }}).then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
          });
      });
  };

  // exports.ProjetByDepartement=(req, res)=> {
  //   console.log("================================");
  //   ProjetModel.findAll({ where: {DepartementId: req.params.dept }}).then(data => {
  //       res.send(data);
  //     })
  //     .catch(err => {
  //       res.status(500).send({
  //         message:
  //           err.message || "Some error occurred while retrieving tutorials."
  //           });
  //       });
  //   };
    exports.ProjetByDepartement=(req, res)=> {
      console.log("================================");
      models.sequelize.query(
        'select * from ProjetByDept  where projetbydept."DepartementId"=:idDept',
        {
          replacements:{idDept:req.params.dept},
          type: QueryTypes.SELECT
        }).then(data => {
          res.send(data);
        })
        .catch(err => {
        console.log(err);
          });
      };



      exports.StatProjets=(req, res)=> {
        console.log("================================");
        models.sequelize.query(
          'select (select count(id) from projetbydept where avancement=0 and "DepartementId"=:dept )as todo , (select count(id) from projetbydept where avancement=100  and "DepartementId"=:dept  )as finish ,(select count(id) from projetbydept where avancement>0 and avancement<100  and "DepartementId"=:dept  )as progress',
          {
            replacements:{dept:req.params.dept},
            type: QueryTypes.SELECT
          }).then(data => {
            res.send(data);
          })
          .catch(err => {
          console.log(err);
            });
        };


        exports.UpdateProjetDate= (req, res) => {
           console.log(req.body);
          // console.log('ilay nandrasan', req.body.PrioriteId);
          ProjetModel.update(
            {
              debut: req.body.debut,
  
            },
            { where: { id: req.body.id ,debut:{ [Op.gt]: req.body.debut}}}
          ).then(
          ProjetModel.update(
            {
              fin: req.body.fin,
            },
            { where: { id: req.body.id ,fin:{ [Op.lt]: req.body.fin}}}
            ))
            .then(rep => res.send(rep))
            .catch(err => {
              // console.log('------------', err)
              console.log(err)
              // res.status(500).send({ message: err.message });
            });
        };