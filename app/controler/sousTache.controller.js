const models = require("../models");
const SousTacheModel = models.SousTache;

exports.getSousTacheByTache = (req, res) => {
    // console.log('----------------------_>>>>>', req.params.TacheId);
    SousTacheModel.findAll({ where: { TacheId: req.params.TacheId } })
        .then(data => {
            // console.log(data);
            res.send(data);
        })
        .catch(err => {
            console.log(err);
            res.send(err);
        })
};

exports.saveSousTache = (req, res) => {
    // console.log('HHHHHHHHHHHHHHHHHh', req.body.labele);
    SousTacheModel.create({
        labele: req.body.labele,
        TacheId: req.body.TacheId,
        isChecked: false,
    }).then(rep => {
        // console.log(rep);
        res.status(200).send(rep);
    }).catch(er => {
        console.log(er);
        res.send(er);
    })
};

exports.updateSousTache = (req, res) => {
    SousTacheModel.update(
        { isChecked: req.body.isChecked },
        { where: { id: req.body.id } }
    ).then(rep => {
        res.status(200).send(rep);
    }).catch(er => {
        res.send(er);
    })
};


exports.delete = (req, res) => {
    SousTacheModel.destroy(
        { where: { id: req.body.id } }
    ).then(rep => {
        res.status(200).send(rep);
    }).catch(er => {
        res.send(er);
    })
};

