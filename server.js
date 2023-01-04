const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const dotenv = require('dotenv');
dotenv.config();

var corsOptions = {
    origin: "http://localhost:3000"
    // origin: "http://localhost:19000"
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//route 
require('./app/routes/problemeTache.routes')(app);
require('./app/routes/sousTache.routes')(app);
require('./app/routes/commentaire.routes')(app);
require('./app/routes/tacheAlerte.routes')(app);
require('./app/routes/region.routes')(app);
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
require('./app/routes/projet.routes')(app);
require('./app/routes/taches.routes')(app);
require('./app/routes/historique.routes')(app);
require('./app/routes/departement.routes')(app);
require('./app/routes/priorite.routes')(app);
require('./app/routes/action.routes')(app);
require('./app/routes/role.routes')(app);
// require('./app/routes/priority.routes')(app);
// require('./app/routes/status.routes')(app);
const db = require("./app/models");
// db.sequelize.sync();
// db.sequelize.sync().then(console.log('synchronisation'));

// db.sequelize.sync().then(() => {
//     console.log('synchronysation des models');
//     db.Region.create({

//         intitule: "Analamanga"
//     });

//     db.Region.create({

//         intitule: "Diana"
//     });

//     db.Region.create({

//         intitule: "Sava"
//     });

//     db.Region.create({

//         intitule: "Boeny"
//     });

//     db.Region.create({

//         intitule: "Menabe"
//     });

//     db.Departement.create({
//         intitule: "DGE",
//         glossaire:"La Direction Générale de l’Eau "
            
//     });

//     db.Departement.create({
//         intitule: "DGAH",
//         glossaire:"La Direction Générale de l’Assainissement et de l’Hygiène"
//     });

//     db.Departement.create({
//         intitule: "DAAF",
//         glossaire:"La Direction des Affaires Administratives et Financières"
            
//     });

//     db.Departement.create({
//         intitule: "DRH",
//         glossaire:"La Direction des Ressources Humaines"
//     });
//     db.Departement.create({
//         intitule: "DAJ",
//         glossaire:"La Direction des Affaires Juridiques"
            
//     });

//     db.Departement.create({
//         intitule: "DSI",
//         glossaire:"La Direction du Système d’Information"
//     });
//     db.Departement.create({
//         intitule: "DPSE",
//         glossaire:"La Direction de la Planification et du Suivi Evaluation"
            
//     });

//     db.Departement.create({
//         intitule: "DREAH",
//         glossaire:"Les Directions Régionales de l’Eau, de l’Assainissement et de l’Hygiène"
//     });
//     db.Departement.create({
//         intitule: "SES",
//         glossaire:"Le Service Environnemental et Social"
            
//     });

//     db.Departement.create({
//         intitule: "SRU",
//         glossaire:"Le Service en charge de la Réponse aux Urgences"
//     });

//     db.Statut.create(
//         {  labele: 'Todo' },
//     );

//     db.Statut.create(
//         {labele: 'In Progress' },
//     );
//     db.Statut.create(
//         { labele: 'Finished' }
//     );
//     db.Priorite.create(
//         { labele: 'Bas', config: '1' }
//     );
//     db.Priorite.create(
//         {labele: 'Normal', config: '2' }
//     );
//     db.Priorite.create(
//         { labele: 'Haut', config: '3' }
//     );
//        db.Role.create(
//         { name: 'Admin' }
//        );

//        db.Role.create(
//         { name: 'Moderateur' }
//        );

//        db.Role.create(
//         { name: 'Utilisateur' }
//        );

//       db.Action.create(
//         { label: 'Modifier', value: false,RoleId:2 }
//       );
//       db.Action.create(
//        { label: 'Supprimer', value: false,RoleId:2 }
//       );
//       db.Action.create(
//        { label: 'Ajouter', value: false,RoleId:2 }
//       );


//       db.Action.create(
//         { label: 'Modifier', value: false,RoleId:3 }
//       );
//       db.Action.create(
//        { label: 'Supprimer', value: false,RoleId:3 }
//       );
//       db.Action.create(
//        { label: 'Ajouter', value: false,RoleId:3 }
//       );

 
    
   
   
//     db.Projet.create({
      
//         titre: "Suivie et gestion de projet ",
//         description:"Creation d'une application de suivie et gestion de projet .Il sert a voir l'evolution de chaque projet pour chaque departement dans le Ministere ,simplifient la planification de chaque tâche dans le projet, son affectation à un collaborateur et son suivi.",
//         debut:new Date(2022,5,15),
//         fin: new Date(2022,6,29),
//         DepartementId: 1,
//         latitude: -16.9005,
//         longitude: 48.3961,
//         color:"white"

//     });

    // db.Projet.create({
      
    //     titre: "Suivi de la lettre du président",
    //     description:"Creation d'une application de suivie et gestion de projet .Il sert a voir l'evolution de chaque projet pour chaque departement dans le Ministere ,simplifient la planification de chaque tâche dans le projet, son affectation à un collaborateur et son suivi.",
    //     debut:new Date(2022,7,10),
    //     fin: new Date(2022,8,31),
    //     DepartementId: 1,
    //     latitude: -16.9005,
    //     longitude: 48.3961,
    //     color:"orange"

    // });

    //    db.Projet.create({
      
    //     titre: "Maintenance des matériels informatiques",
    //     description:"Maintenire les matériel informatiques.Il sert a voir l'evolution de chaque projet pour chaque departement dans le Ministere ,simplifient la planification de chaque tâche dans le projet, son affectation à un collaborateur et son suivi.",
    //     debut:new Date(2022,6,1),
    //     fin: new Date(2022,12,30),
    //     DepartementId: 1,
    //     latitude: -16.9005,
    //     longitude: 48.3961,
    //     color:"gray"

    // });

    
    //    db.Projet.create({
      
    //     titre: "Optimisation de l'accès au réseau",
    //     description:".Optimisation de l'accès au réseau.Il sert a voir l'evolution de chaque projet pour chaque departement dans le Ministere ,simplifient la planification de chaque tâche dans le projet, son affectation à un collaborateur et son suivi.",
    //     debut:new Date(2022,6,1),
    //     fin: new Date(2022,12,30),
    //     DepartementId: 2,
    //     latitude: -16.9005,
    //     longitude: 48.3961,
    //     color:"skyblue"

    // });

    //    db.Projet.create({  
    //     titre: "Opérationnalisation du SESAM",
    //     description:"Opérationnalisation du SESAM.Il sert a voir l'evolution de chaque projet pour chaque departement dans le Ministere ,simplifient la planification de chaque tâche dans le projet, son affectation à un collaborateur et son suivi.",
    //     debut:new Date(2022,6,1),
    //     fin: new Date(2022,12,30),
    //     DepartementId: 2,
    //     latitude: -16.9005,
    //     longitude: 48.3961,
    //     color:"yellow"
    // });

    //       db.Projet.create({  
    //     titre: "Cataloguage et numérisation des documents ",
    //     description:"Opérationnalisation du SESAM.Il sert a voir l'evolution de chaque projet pour chaque departement dans le Ministere ,simplifient la planification de chaque tâche dans le projet, son affectation à un collaborateur et son suivi.",
    //     debut:new Date(2022,6,1),
    //     fin: new Date(2022,12,30),
    //     DepartementId: 2,
    //     latitude: -16.9005,
    //     longitude: 48.3961,
    //     color:"green"
    // });

//Tache projet 1
//     db.Tache.create(
//         {
//             debut: new Date(2022,5,15),
//             fin: new Date(2022,5,17),
//             description:'Analyse des besoins',
//             output: 'Bésoins utilisateurs identifiés',
//             StatutId: 1,
//             PrioriteId: 1,
//             ProjetId: 1,
//             UserId:null,
//             estAlerteur: true,
//             latitude: -16.9005,
//             longitude: 48.3961
//         }
//     )

//     db.Tache.create(
//         {
//             debut:new Date(2022,5,20),
//             fin: new Date(2022,5,24),
//             description:'Modélisation du projet',
//             output: 'Modèle conceptuel du projet disponible',
//             StatutId: 1,
//             PrioriteId: 2,
//             ProjetId: 1,
//             UserId:null,
//             estAlerteur: false,
//             latitude: -17.534,
//             longitude: 47.966
//         }
//     );
//     db.Tache.create(
//         {
//             debut: new Date(2022,6,4),
//             fin: new Date(2022,6,24),
//             description: 'Développement du projet',
//             output: 'Draft 0 du projet developpés',
//             StatutId: 1,
//             PrioriteId: 3,
//             ProjetId: 1,
//             UserId:null,
//             estAlerteur: false,
//             latitude: -16.7,
//             longitude: 45.966
//         });


    // db.Tache.create(
    //     {
    //         debut:new Date(2022,6,25),
    //         fin: new Date(2022,6,29),
    //         description: 'Test',
    //         output: 'Eventuels bugs identifiés',
    //         StatutId: 1,
    //         PrioriteId: 1,
    //         ProjetId: 1,
    //         UserId:1,
    //         estAlerteur: true,
    //         latitude: -20.915,
    //         longitude: 47.043
    //     });
    // db.Tache.create(
    //     {
    //         debut:new Date(2022,6,25),
    //         fin: new Date(2022,6,29),
    //         description: 'Déploiement en ligne',
    //         output: 'Outil mise en ligne',
    //         StatutId: 2,
    //         PrioriteId: 1,
    //         UserId:1,
    //         ProjetId: 1,
    //         estAlerteur: true,
    //         latitude: -20.915,
    //         longitude: 47.043
    //     });

    //Tache projet 2
    // db.Tache.create(
    //     {
    //         debut: new Date(2022,5,15),
    //         fin: new Date(2022,5,17),
    //         description:'Analyse des besoins',
    //         output: 'Bésoins utilisateurs identifiés',
    //         StatutId: 1,
    //         PrioriteId: 1,
    //         ProjetId: 3,
    //         UserId:3,
    //         estAlerteur: true,
    //         latitude: -16.9005,
    //         longitude: 48.3961
    //     }
    // )
    // db.Tache.create(
    //     {
    //         debut:new Date(2022,5,20),
    //         fin: new Date(2022,5,24),
    //         description:'Modélisation du projet',
    //         output: 'Modèle conceptuel du projet disponible',
    //         StatutId: 1,
    //         PrioriteId: 2,
    //         ProjetId: 3,
    //         UserId:2,
    //         estAlerteur: false,
    //         latitude: -17.534,
    //         longitude: 47.966
    //     }
    // );
    // db.Tache.create(
    //     {
    //         debut: new Date(2022,6,4),
    //         fin: new Date(2022,6,24),
    //         description: 'Développement du projet',
    //         output: 'Draft 0 du projet developpés',
    //         StatutId: 1,
    //         PrioriteId: 3,
    //         ProjetId: 3,
    //         UserId:2,
    //         estAlerteur:false,
    //         latitude: -16.7,
    //         longitude: 45.966
    //     });


    // db.Tache.create(
    //     {
    //         debut:new Date(2022,6,25),
    //         fin: new Date(2022,6,29),
    //         description: 'Test',
    //         output: 'Eventuels bugs identifiés',
    //         StatutId: 1,
    //         PrioriteId: 1,
    //         ProjetId: 3,
    //         UserId:1,
    //         estAlerteur: true,
    //         latitude: -20.915,
    //         longitude: 47.043
    //     });
    // db.Tache.create(
    //     {
    //         debut:new Date(2022,6,25),
    //         fin: new Date(2022,6,29),
    //         description: 'Déploiement en ligne',
    //         output: 'Outil mise en ligne',
    //         StatutId: 2,
    //         PrioriteId: 1,
    //         UserId:3,
    //         ProjetId: 3,
    //         estAlerteur: true,
    //         latitude: -20.915,
    //         longitude: 47.043
    //     });

     //Tache projet 3
    // db.Tache.create(
    //     {
    //         debut: new Date(2022,5,15),
    //         fin: new Date(2022,5,17),
    //         description:'Diagnostique',
    //         output: 'Origines du panne matériel identifiés',
    //         StatutId: 1,
    //         PrioriteId: 1,
    //         ProjetId: 4,
    //         UserId:1,
    //         estAlerteur: true,
    //         latitude: -16.9005,
    //         longitude: 48.3961
    //     }
    // )
    // db.Tache.create(
    //     {
    //         debut:new Date(2022,5,20),
    //         fin: new Date(2022,5,24),
    //         description:'Achat pièce de rechange',
    //         output: 'Pièces de remplacement disponibles',
    //         StatutId: 1,
    //         PrioriteId: 2,
    //         ProjetId: 4,
    //         UserId:2,
    //         estAlerteur: false,
    //         latitude: -17.534,
    //         longitude: 47.966
    //     }
    // );
    // db.Tache.create(
    //     {
    //         debut: new Date(2022,6,4),
    //         fin: new Date(2022,6,24),
    //         description: 'Réparation',
    //         output: 'Matériels informatiques reparés',
    //         StatutId: 1,
    //         PrioriteId: 3,
    //         ProjetId: 4,
    //         UserId:2,
    //         estAlerteur:false,
    //         latitude: -16.7,
    //         longitude: 45.966
    //     });

    
     //Tache projet 4
    // db.Tache.create(
    //     {
    //         debut: new Date(2022,5,15),
    //         fin: new Date(2022,5,17),
    //         description:'Diagnostique réseau / analyse des besoins',
    //         output: 'Origines du panne reseau identifiés/besoins utilisateurs identifiés',
    //         StatutId: 1,
    //         PrioriteId: 1,
    //         ProjetId: 5,
    //         UserId:1,
    //         estAlerteur: true,
    //         latitude: -16.9005,
    //         longitude: 48.3961
    //     }
    // )
    // db.Tache.create(
    //     {
    //         debut:new Date(2022,5,20),
    //         fin: new Date(2022,5,24),
    //         description:'Achat nouveau pièce d`accès réseau ou de rechange',
    //         output: 'Nouveau pièce ou de remplacement disponible',
    //         StatutId: 1,
    //         PrioriteId: 2,
    //         ProjetId: 5,
    //         UserId:2,
    //         estAlerteur: false,
    //         latitude: -17.534,
    //         longitude: 47.966
    //     }
    // );
    // db.Tache.create(
    //     {
    //         debut: new Date(2022,6,4),
    //         fin: new Date(2022,6,24),
    //         description: 'Installation ou  réhabilitation',
    //         output: 'Réseau fonctionnel',
    //         StatutId: 1,
    //         PrioriteId: 3,
    //         ProjetId: 5,
    //         UserId:2,
    //         estAlerteur:false,
    //         latitude: -16.7,
    //         longitude: 45.966
    //     });

     //Tache projet 5
    // db.Tache.create(
    //     {
    //         debut: new Date(2022,5,15),
    //         fin: new Date(2022,5,17),
    //         description:'Finalisation du développement de l`outil-Module Planification et programmation',
    //         output: 'Module Planification et programmation fonctionnel',
    //         StatutId: 1,
    //         PrioriteId: 1,
    //         ProjetId: 6,
    //         UserId:1,
    //         estAlerteur: true,
    //         latitude: -16.9005,
    //         longitude: 48.3961
    //     }
    // )
    // db.Tache.create(
    //     {
    //         debut:new Date(2022,5,20),
    //         fin: new Date(2022,5,24),
    //         description:'Traitement des données sur les réalisations 2019 à 2022',
    //         output: 'Données sur les réalisations 2019 à 2022 verifiés et respectant les normes de l`outil',
    //         StatutId: 1,
    //         PrioriteId: 2,
    //         ProjetId: 6,
    //         UserId:2,
    //         estAlerteur: false,
    //         latitude: -17.534,
    //         longitude: 47.966
    //     }
    // );
    // db.Tache.create(
    //     {
    //         debut: new Date(2022,6,4),
    //         fin: new Date(2022,6,24),
    //         description: 'Simulation sur Excel',
    //         output: 'Erreur sur les données corrigés',
    //         StatutId: 1,
    //         PrioriteId: 3,
    //         ProjetId:6,
    //         UserId:3,
    //         estAlerteur:false,
    //         latitude: -16.7,
    //         longitude: 45.966
    //     });

    //     db.Tache.create(
    //     {
    //         debut: new Date(2022,6,4),
    //         fin: new Date(2022,6,24),
    //         description: 'Intégration des données dans SESAM',
    //         output: 'Données mise à jour dans SESAM',
    //         StatutId: 1,
    //         PrioriteId: 3,
    //         ProjetId:6,
    //         UserId:3,
    //         estAlerteur:false,
    //         latitude: -16.7,
    //         longitude: 45.966
    //     });

    //         db.Tache.create(
    //     {
    //         debut: new Date(2022,6,4),
    //         fin: new Date(2022,6,24),
    //         description: 'Mise en ligne des données SESAM',
    //         output: 'SESAM à jour disponible en ligne',
    //         StatutId: 1,
    //         PrioriteId: 3,
    //         ProjetId:6,
    //         UserId:3,
    //         estAlerteur:false,
    //         latitude: -16.7,
    //         longitude: 45.966
    //     });

    //        db.Tache.create(
    //     {
    //         debut: new Date(2022,6,4),
    //         fin: new Date(2022,6,24),
    //         description: 'Formation des formateurs des DREAH',
    //         output: 'DREAHs aptent à exploiter et vulgarisés l`outil',
    //         StatutId: 1,
    //         PrioriteId: 3,
    //         ProjetId:6,
    //         UserId:3,
    //         estAlerteur:false,
    //         latitude: -16.7,
    //         longitude: 45.966
    //     });

    //            db.Tache.create(
    //     {
    //         debut: new Date(2022,6,4),
    //         fin: new Date(2022,6,24),
    //         description: 'Formation des PTFs régionaux et des équipes techniques au niveau Commune',
    //         output: 'PTFs régionaux et Commune aptent à mettre à jour l`outil',
    //         StatutId: 1,
    //         PrioriteId: 3,
    //         ProjetId:6,
    //         UserId:3,
    //         estAlerteur:false,
    //         latitude: -16.7,
    //         longitude: 45.966
    //     });

    //             db.Tache.create(
    //     {
    //         debut: new Date(2022,6,4),
    //         fin: new Date(2022,6,24),
    //         description: 'Mise à jour systematique ',
    //         output: 'SESAM mise à jour périodiquement',
    //         StatutId: 1,
    //         PrioriteId: 3,
    //         ProjetId:6,
    //         UserId:3,
    //         estAlerteur:false,
    //         latitude: -16.7,
    //         longitude: 45.966
    //     });

 //Tache projet 6
    // db.Tache.create(
    //     {
    //         debut: new Date(2022,5,15),
    //         fin: new Date(2022,5,17),
    //         description:'Cataloguage des documents',
    //         output: 'Documents physiques repertoriés',
    //         StatutId: 1,
    //         PrioriteId: 1,
    //         ProjetId: 8,
    //         UserId:2,
    //         estAlerteur: true,
    //         latitude: -16.9005,
    //         longitude: 48.3961
    //     }
    // )

    //     db.Tache.create(
    //     {
    //         debut: new Date(2022,5,15),
    //         fin: new Date(2022,5,17),
    //         description:'Numérisation des documents',
    //         output: 'Documents numériques disponibles',
    //         StatutId: 1,
    //         PrioriteId: 1,
    //         ProjetId: 8,
    //         UserId:2,
    //         estAlerteur: true,
    //         latitude: -16.9005,
    //         longitude: 48.3961
    //     }
    // )


// });

// db.sequelize.sync().then(() => {
//     console.log('synchronysation des models');
// })
// console.log('yes');

const { QueryTypes } = require('sequelize');
// const sequelize = require("sequelize");

// async function query() {
//     const records = await db.sequelize.query('insert into public.Tache'$tache, {
//         type: QueryTypes.SELECT
//     });
//     console.log(JSON.stringify(records[0], null, 2));
// }
// query();

// const PORT = 8080;
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});