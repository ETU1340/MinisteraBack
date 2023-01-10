const models = require("../models");
const UserModel = models.User;
const { QueryTypes } = require('sequelize');
exports.updateUser = (req, res) => {
    // Save User to Database
    let password = req.body.password;
    let newPass = req.body.newPass;
    let oldUserName = req.body.oldUserName;
    if (password !== newPass) {
        throw new Exception('les mots de passe ne sont pas identique');
    }
    UserModel.findOne()


    UserModel.create({
        username: req.body.username,
        email: req.body.email,
        isActive: false,
        password: bcrypt.hashSync(generatePassword, 8)
    })
        .then(user => {
            res.send('Attendre activation de votre compte');
        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });

};


exports.getAllUser = (req, res) => {
    UserModel.findAll()
        .then(user => {
            res.send(user);
        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });
};

exports.getUserByDept = (req, res) => {
  UserModel.findAll( { where: { DepartementId: req.params.idDept} })
      .then(user => {
          res.send(user);
      })
      .catch(err => {
          res.status(500).send({ message: err.message });
      });
};


exports.getUser = (req, res) => {
  console.log("kojdfuheufhue")
 models.sequelize.query(
    'SELECT u.id, email, username, "password", "isActive", initiation, "RoleId", photo,name ,"DepartementId" FROM "public"."User" u join "public"."Role" r on r.id=u."RoleId" where u.id=:idUser',
    {
      replacements:{idUser:req.params.idUser},
      type: QueryTypes.SELECT
    }).then(data => {
  res.send(data);
  })
  .catch(err => {
 console.log(err);
    });
};




exports.UpdateUser = (req, res) => {
    // console.log(req.params);
    // console.log('ilay nandrasan', req.body.PrioriteId);
    UserModel.update(
      {
        username: req.body.username,
        photo:req.body.photo,
        RoleId:req.body.roleId,
        DepartementId:req.body.deptId,
      },
      { where: { id: req.body.idUser} }
    )
      .then(rep => res.send(rep))
      .catch(err => {
        // console.log('------------', err)
        console.log(err)
        // res.status(500).send({ message: err.message });
      });
  };

  exports.UpdateUserMobile = (req, res) => {
    console.log(req.body);
    // console.log('ilay nandrasan', req.body.PrioriteId);
    UserModel.update(
      {
        username: req.body.username,
        photo:req.body.photo
      },
      { where: { id: req.body.idUser} }
    )
      .then(rep => res.send(rep))
      .catch(err => {
        // console.log('------------', err)
        console.log(err)
        // res.status(500).send({ message: err.message });
      });
  };