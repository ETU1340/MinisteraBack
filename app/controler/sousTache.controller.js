const models = require("../models");
const SousTacheModel = models.SousTache;

exports.getSousTacheByTache = (req, res) => {
    console.log('----------------------_>>>>>', req.params.TacheId);
    SousTacheModel.findAll({ where: { TacheId: req.params.TacheId } })
        .then(data => {
            console.log(data);
            res.send(data);
        })
        .catch(err => {
            console.log(err);
        })
};

exports.saveSousTache = (req, res) => {
    SousTacheModel.create({
        labele: req.body.labele,
        TacheId: req.body.TacheId,
        isChecked: req.body.isChecked,

    }).then(rep => {
        // console.log(rep);
        res.status(200).send(rep);
    }).catch(er => {
        console.log(er);
        res.send(er);
    })
};
// exports.deleteComs = (req, res) => {
//     res.status(200).send("delete.");
// };
// exports.updateComs = (req, res) => {
//     res.status(200).send("update.");
// };
