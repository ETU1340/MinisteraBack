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
