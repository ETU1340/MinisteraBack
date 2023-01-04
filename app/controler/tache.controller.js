const models = require("../models");
const TacheModel = models.Tache;
const Commentaire = models.CommentaireTache;
const SousTache=models.SousTache;
// const SousTache = models.SousTache;

const { QueryTypes } = require('sequelize');
exports.activePrevisionalLate = (req, res) => {
  console.log('huu', req.body.tacheRetard);
  let ids = [];
  req.body.tacheRetard.map(val => {
    ids.push(val.id);
  })
  console.log('huu', new Date());

  TacheModel.update(
    {
      StatutId: 2, ///in progress
      debut: new Date(),
    },
    { where: { id: ids } }
  ).then(rep => {
    res.status(200).send('activation reussis');
  }).catch(err => {
    res.send("Erreur lors de l'activation");
  })
};

exports.getAllTache = (req, res) => {
  // return un instance de tache
  TacheModel.findAll()
    .then(data => {
      let todo = [];
      let inProgress = [];
      let doing = [];
      data.map(tache => {
        if (tache.dataValues.StatutId === 1) { todo.push(tache.dataValues) };
        if (tache.dataValues.StatutId === 2) inProgress.push(tache.dataValues);
        if (tache.dataValues.StatutId === 3) doing.push(tache.dataValues);
      })
      let dataFormater = { todo, inProgress, doing }
      res.send(dataFormater);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tasks."
      });
    });
};

exports.AjoutTache = (req, res) => {
  console.log(req.body);
  TacheModel.create({
   
    ProjetId: req.body.ProjetId,
    PrioriteId: req.body.PrioriteId,
    StatutId: 1,
    UserId:req.body.idUser,
    description: req.body.description,
    output: req.body.output,
    debut: req.body.debut,
    fin: req.body.fin,
    estAlerteur: req.body.estAlerteur
  }).then(rep => res.send(rep))
    .catch(err => {
      console.log(err);
      // res.status(500).send({ message: err.message });
    });
};

exports.TacheByProjet = (req, res) => {
  console.log("================================");
  TacheModel.findAll({ where: { ProjetId: req.params.id_projet } }).then(data => {
    // res.send(data);
    let todo = [];
    let inProgress = [];
    let doing = [];
    let retard = [];
    let avancementAndNumber = [];

    data.map(tache => {
      if (tache.dataValues.StatutId === 1) {
        todo.push(tache.dataValues)
        if (tache.dataValues.debut <= new Date()) {
          retard.push(tache.dataValues);
        }
      };
      if (tache.dataValues.StatutId === 2)
        inProgress.push(tache.dataValues);
      if (tache.dataValues.StatutId === 3) doing.push(tache.dataValues);
    })

    let dataFormater = { retard, todo, inProgress, doing }
    res.send(dataFormater);


  })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tasks."
      });
    });
};


exports.TacheByProjetMobile = (req, res) => {
  console.log("kojdfuheufhue")
 models.sequelize.query(
    'select * from TacheByProjet  where "public".tachebyprojet."ProjetId"=:idProjet order by "debut" asc ',
    {
      replacements:{idProjet:req.params.id_projet },
      type: QueryTypes.SELECT
    }).then(data => {
  res.send(data);
  })
  .catch(err => {
 console.log(err);
    });
};

exports.TacheByProjetByUser = (req, res) => {
  console.log("kojdfuheufhue")
 models.sequelize.query(
    'select * from TacheByProjet  where "public".tachebyprojet."ProjetId"=:idProjet and "public".tachebyprojet."UserId"=:idUser order by "debut" asc  ',
    {
      replacements:{idProjet:req.params.id_projet,idUser:req.params.id_user },
      type: QueryTypes.SELECT
    }).then(data => {
  res.send(data);
  })
  .catch(err => {
 console.log(err);
    });
};

exports.TacheByProjetByUser = (req, res) => {
  console.log(req.params);
 models.sequelize.query(
    'select * from TacheByProjet  where "public".tachebyprojet."ProjetId"=:idProjet  and  "public".tachebyprojet."UserId"=:idUser ',
    {
      replacements:{idProjet:req.params.id_projet,idUser:req.params.idUser },
      type: QueryTypes.SELECT
    }).then(data => {
  res.send(data);
  })
  .catch(err => {
 console.log(err);
    });
};


exports.StatTacheByProjet=(req, res)=> {
  console.log("================================");
  models.sequelize.query(
    'select (select count(id) from tachebyprojet where "StatutId"=1 and "ProjetId"=:projet)as todo , (select count(id) from tachebyprojet where "StatutId"=3  and "ProjetId"=:projet)as finish ,(select count(id) from tachebyprojet where "StatutId"=2 and "ProjetId"=:projet)as progress',
    {
      replacements:{projet:req.params.id_projet},
      type: QueryTypes.SELECT
    }).then(data => {
      res.send(data);
    })
    .catch(err => {
    console.log(err);
      });
  };

exports.UpdateTache = async (req, res) => {
  // console.log(req.params);
  console.log(req.body.StatutId);
  await TacheModel.update(
    {
      StatutId: req.body.StatutId,
      debut: req.body.debut,
      fin: req.body.fin,
      description: req.body.description,
      output: req.body.output,
      estAlerteur: req.body.estAlerteur,
      ProriteId: req.body.ProriteId
    },
    { where: { id: req.params.tache } }
  )
    .then(await res.send({ message: "Task was update successfully!" }))
    .catch(err => {
      // console.log('------------', err)
      res.status(500).send({ message: err.message });
    });
};

exports.UpdateTacheMobile= async (req, res) => {
  // console.log(req.params);
  console.log(req.body.StatutId);

 

    console.log('autre');
    await TacheModel.update(
      {
        StatutId: req.body.StatutId,
        debut: req.body.debut,
        fin: req.body.fin,
        UserId:req.body.idUser,
        description: req.body.description,
        output: req.body.output,
        estAlerteur: req.body.estAlerteur,
        ProriteId: req.body.PrioriteId
      },
      { where: { id: req.body.tache } }
    )
      .then(await res.send({ message: "Task was update successfully!" }))
      .catch(err => {
        console.log('------------', err)
        // res.status(500).send({ message: err.message });
      });


  

};


// exports.UpdateToProgress = async (req, res) => {
//   console.log('to progress');
//   models.sequelize.query(
//     'UPDATE "public"."Tache" SET debut = (select current_date),fin=(select current_date)+ (select (fin-debut) from "public"."Tache" where id=:idTache),"StatutId"=:statut where id=:idTache  ',
//     {
//       replacements:{idTache:req.body.tache ,statut:req.body.StatutId},
//       type: QueryTypes.SELECT
//     })
//     .then(await res.send({ message: "Task was update successfully!" }))
//     .catch(err => {
//       console.log('------------', err)
//       // res.status(500).send({ message: err.message });
//     });
// };


exports.TacheDate = (req, res) => {
  console.log("kojdfuheufhue")
 models.sequelize.query(
    ' select min(debut) as datedebut,max(fin) as datefin from "Tache" where "ProjetId"=:idProjet',
    {
      replacements:{idProjet:req.params.id_projet },
      type: QueryTypes.SELECT
    }).then(data => {
  res.send(data);
  })
  .catch(err => {
 console.log(err);
    });
};

// exports.TacheState = (req, res) => {
//   console.log("kojdfuheufhue")
//  models.sequelize.query(
//     ' select count (id) as finish,(select count(id) from tachebyprojet where "ProjetId"=:idProjet ) as total from tachebyprojet where avancement=100 and  "ProjetId"=:idProjet',
//     {
//       replacements:{idProjet:req.params.id_projet },
//       type: QueryTypes.SELECT
//     }).then(data => {
//   res.send(data);
//   })
//   .catch(err => {
//  console.log(err);
//     });
// };
exports.UpdateTacheWeb = (req, res) => {
  // console.log(req.params);
  // console.log('ilay nandrasan', req.body.PrioriteId);
  TacheModel.update(
    {
      StatutId: req.body.StatutId,
      debut: req.body.debut,
      fin: req.body.fin,
      description: req.body.description,
      output: req.body.output,
      estAlerteur: req.body.estAlerteur,
      PrioriteId: req.body.PrioriteId
    },
    { where: { id: req.body.id } }
  )
    .then(rep => res.send(rep))
    .catch(err => {
      // console.log('------------', err)
      console.log(err)
      // res.status(500).send({ message: err.message });
    });
};


exports.DeleteTache = (req, res) => {
  TacheModel.destroy(
    { where: { id: req.body.id } }
  )
    .then(result => {
      Commentaire.destroy(
        { where: { TacheId: req.body.id } }
      )
      res.send({ result })
    }
    )
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
}

exports.DeleteTacheMobile = (req, res) => {
  console.log("delete");
  TacheModel.destroy(
    { where: { id: req.params.tache } }
  )
    .then(result => {
      Commentaire.destroy(
        { where: { TacheId: req.params.tache } }
      ) ;
        SousTache.destroy(
          { where: { TacheId: req.params.tache } }
        )
      res.send({ result })
    }
    )
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};
