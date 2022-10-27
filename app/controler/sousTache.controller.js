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
    })
};
exports.updateSousTache = (req, res) => {
    console.log(req.body);
    SousTacheModel.update(
        { isChecked: req.body.isChecked,labele: req.body.labele },
        { where: { id: req.body.id } }
    ).then(rep => {
        res.status(200).send(rep);
    }).catch(er => {
       console.log(er);
    })
};
exports.delete = (req, res) => {
    SousTacheModel.destroy(
        { where: { id: req.params.idTache } }
    ).then(rep => {
        res.send({rep});
    }).catch(er => {
        console.log(er);
    })
};


///getavancement tokny atao any am base
exports.getAvancement = (req, res) => {
    ///mandray id tache dia mireturn number soustask sy avancement     
    // console.log('PPPPPPPPPPPPPPPPPPPPPPPPPppp', req.params.TacheId);
    SousTacheModel.findAll(
        { where: { TacheId: req.params.TacheId } }
    ).then(rep => {
        let terminer = 0;
        let avancement = 0;
        let total = rep.length;
        for (let i = 0; i < total; i++) {
            if (rep[i].isChecked) {
                terminer++;
            }
        }
        avancement = Math.round(terminer * 100 / total);
        res.send({ total, terminer, avancement });
    }).catch(er => {
        console.log('JKKJKJKJKJk', er);
        res.send(er);
    })

};

