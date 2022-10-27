// ato za no mireceive data,
//     ato no mfind,
//         ato no mandefa json

const models = require("../models");
const Commentaire = models.Commentaire;
exports.getAllComsByTache = (req, res) => {
    console.log('----------------------_>>>>>', req.params.TacheId);
    Commentaire.findAll({ where: { TacheId: req.params.TacheId } })
        .then(data => {
            console.log(data);
            res.send(data);
        })
        .catch(err => {
            console.log(err);
        })
};

exports.saveComs = (req, res) => {
    console.log(req.body);
    Commentaire.create({
        intitule: req.body.intitule,
        TacheId: req.body.TacheId,
    }).then(rep => {
        // console.log(rep);
        res.status(200).send(rep);
    }).catch(er => {
        console.log(er);
        res.send(er);
    })
};
exports.deleteComs = (req, res) => {
    res.status(200).send("delete.");
};
exports.updateComs = (req, res) => {
    res.status(200).send("update.");
};