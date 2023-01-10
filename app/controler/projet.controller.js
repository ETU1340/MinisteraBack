// ato za no mireceive data,
//     ato no mfind,
//         ato no mandefa json






//misy erreur ilay res.send message, milla jerena ilay izy
const models = require("../models");
const ProjetModel = models.Projet;
const { Op } = require("sequelize");
const { QueryTypes } = require('sequelize');
exports.getAllProjet = (req, res) => {
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
exports.getProjetByDept = (req, res) => {
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


exports.AjoutProjet = (req, res) => {
  console.log("================================");
  ProjetModel.create({
    titre: req.body.titre,
    debut: req.body.debut,
    fin: req.body.fin,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    color: req.body.color,
    DepartementId: req.body.id_departement,
    RegionId: req.body.id_region,
  }).then(rep => {
    console.log('huhuNw projet', rep);
    res.send(rep)
  })
    .catch(err => {
      console.log('errorrororo projet', err);

      res.status(500).send({ message: err.message });
    });

};



exports.ProjetByRegion = (req, res) => {
  console.log("================================");
  ProjetModel.findAll({ where: { RegionId: req.params.region } }).then(data => {
    res.send(data);
  })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

exports.ProjetByDepartement = (req, res) => {
  console.log("================================");
  ProjetModel.findAll({ where: { DepartementId: req.params.dept } }).then(data => {
    res.send(data);
  })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};


exports.ProjetByDepartementMobile=(req, res)=> {
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


  exports.ProjetAllMobile=(req, res)=> {
    console.log("================================");
    models.sequelize.query(
      'select * from ProjetByDept',
      {
        type: QueryTypes.SELECT
      }).then(data => {
        res.send(data);
      })
      .catch(err => {
      console.log(err);
        });
    };



  exports.StatProjetsByDept=(req, res)=> {
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

    exports.StatGlobal=(req, res)=> {
      console.log("================================");
      models.sequelize.query(
        'select (select count(id) from projetbydept where avancement=0 )as todo , (select count(id) from projetbydept where avancement=100)as finish ,(select count(id) from projetbydept where avancement>0 and avancement<100 )as progress',
        {
          type: QueryTypes.SELECT
        }).then(data => {
          res.send(data);
        })
        .catch(err => {
        console.log(err);
          });
      };

    exports.StatProjetByUser=(req, res)=> {
      console.log("================================");
      models.sequelize.query(
        'select sum(avancement)*100/(count(id)*100) as avancement,"UserId",username,count(id) as nbtache  from tachebyprojet where "ProjetId"=:projet group by "UserId",username',
        {
          replacements:{projet:req.params.idProjet},
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