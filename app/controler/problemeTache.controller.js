const models = require("../models");

const ProblemeTacheModel = models.ProblemeTache;
const Probleme = models.Probleme;

exports.getAllByTask = (req, res) => {

    ProblemeTacheModel.findAll(
        {
            where: { TacheId: req.params.TacheId },

            include: [{
                model: Probleme,
                attributes: ['labele']
            }]

        }
    )
        .then(data => {
            res.send(data);
            console.log(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Alert."
            });
        });
};

exports.save = (req, res) => {
    ProblemeTacheModel.create({
        TacheId: req.body.TacheId,
        ProblemeId: req.body.ProblemeId,
        description: req.body.description,
        isSolved: false,

    }).then(rep => res.send(rep))
        .catch(err => {
            console.log(err);
            res.status(500).send({ message: err.message });
        });
};
exports.optionProbleme = (req, res) => {
    Probleme.findAll(

    )
        .then(rep => res.send(rep))
        .catch(err => {
            console.log(err);
            res.status(500).send({ message: err.message });
        });
};

