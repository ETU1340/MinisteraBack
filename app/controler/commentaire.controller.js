// ato za no mireceive data,
//     ato no mfind,
//         ato no mandefa json

const models = require("../models");
const Commentaire = models.Commentaire;
const { QueryTypes } = require('sequelize');
const User = models.User;
exports.getAllComsByTache = (req, res) => {
    console.log("kojdfuheufhue")
    models.sequelize.query(
       'select c.*,u.username from "Commentaire" c join "User" u on c."UserId"=u.id where c."typeCom"=2 and c."idObjet"=:idTache order by "createdAt" asc ',
       {
         replacements:{idTache:req.params.TacheId},
         type: QueryTypes.SELECT
       }).then(data => {
     res.send(data);
     })
     .catch(err => {
    console.log(err);
       });
};

exports.getAllComsByProjet = (req, res) => {
  console.log("kojdfuheufhue")
  models.sequelize.query(
     'select c.*,u.username from "Commentaire" c join "User" u on c."UserId"=u.id where c."typeCom"=1 and c."idObjet"=:idProjet order by "createdAt" asc ',
     {
       replacements:{idProjet:req.params.ProjetId},
       type: QueryTypes.SELECT
     }).then(data => {
   res.send(data);
   })
   .catch(err => {
  console.log(err);
     });
};

exports.saveComs = (req, res) => {
    Commentaire.create({
        commentaire: req.body.commentaire,
        typeCom:req.body.TypeCom,
        idObjet: req.body.idObjet,
        UserId:req.body.UserId
    }).then(rep => {
        models.sequelize.query(
            'select c.*,u.username from "Commentaire" c join "User" u on c."UserId"=u.id where c.id=:id',
            {
              replacements:{id:rep.dataValues.id},
              type: QueryTypes.SELECT
            }).then(data => {
          res.send(data);
          })
       
    }).catch(er => {
        console.log(er);
        res.send(er);
    })
};


    exports.DeleteCommentaire = (req, res) => {
        console.log("delete");
        Commentaire.destroy(
          { where: { id: req.params.commentaire } }
        )
          .catch(err => {
            res.status(500).send({ message: err.message });
          });
      };
      

