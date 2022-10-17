
const db = require("../models");
const ProblemeTache = db.ProblemeTache;
const Probleme = db.Probleme;
const { QueryTypes } = require('sequelize');

exports.getEffectifByStatus = async (req, res) => {
    await db.sequelize.query(`
        SELECT count(id) as effectif,"StatutId"
	    FROM public."Tache" group by "StatutId";`, {
        type: QueryTypes.SELECT
    })
        .then(rep => {
            let todo = 0;
            let progress = 0;
            let doing = 0;
            let total = 0;
            // console.log('HUHUUHUHUHUHUHUU', rep);

            rep.map(val => {
                if (val.StatutId === 1) todo = parseInt(val.effectif);
                if (val.StatutId === 2) progress = parseInt(val.effectif);
                if (val.StatutId === 3) doing = parseInt(val.effectif);
            })


            // console.log('huhuhuhahahahahuahuahuahauha', typeof (todo));
            total = parseInt(todo + progress + doing);
            res.send({ todo, progress, doing, total });
        })
        .catch(err => {
            res.send(err);
        });
};


exports.getStatTacheRetard = async (req, res) => {
    await db.sequelize.query(`
       SELECT count(id) 
	    FROM public."Tache" where "StatutId"!=3 and "fin"<now();`, {
        type: QueryTypes.SELECT
    })
        .then(retard => {
            db.sequelize.query(`
                SELECT count(id) 
	            FROM public."Tache" where "StatutId"=3 and "fin">now();`, {
                type: QueryTypes.SELECT
            })
                .then(avance => {
                    res.send({ retard, avance });
                })
                .catch(err => {
                    res.send(err);
                });
        })
        .catch(err => {
            res.send(err);
        });
};

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
