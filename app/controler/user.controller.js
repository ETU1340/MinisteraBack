const models = require("../models");
const UserModel = models.User;


exports.UpdateUser = (req, res) => {
  // console.log(req.params);
  // console.log('ilay nandrasan', req.body.PrioriteId);
  UserModel.update(
    {
      username: req.body.username,
      photo:req.body.photo,
      RoleId:req.body.roleId,
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
