
const db = require("../models");
const ProblemeTache = db.ProblemeTache;
const Probleme = db.Probleme;
const { QueryTypes } = require('sequelize');

exports.getStatProblem = async (req, res) => {

    await db.sequelize.query(`
        select count(public."ProblemeTaches".id) as nombre, labele from public."ProblemeTaches"
        join "Problemes"
        ON "ProblemeTaches"."ProblemeId" = "Problemes"."id"
        group by "Problemes".id `, {
        type: QueryTypes.SELECT
    })
        .then(rep => {
            res.send(rep);
        })
        .catch(err => {
            res.send(err);
        });
    // ProblemeTache.findAll(
    //     {
    //         attributes: [[db.sequelize.fn('COUNT', db.sequelize.col('id')), 'ProblemCount']],
    //         group: ['ProblemeId'],

    //         // where: { ProblemeId: ProblemeTache.id },
    //         include: [{
    //             model: Probleme,
    //             attributes: ['labele', 'id']
    //         }],
    //         raw: true
    //     }
    // )
    //     .then(rep => {
    //         res.send(rep);
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     })
};
