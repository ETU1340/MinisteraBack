const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const dotenv = require('dotenv');
dotenv.config();

var corsOptions = {
    // origin: "http://localhost:3000"
    origin: "http://localhost:19000"
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
// require('./app/routes/priority.routes')(app);
// require('./app/routes/status.routes')(app);
const db = require("./app/models");
// db.sequelize.sync();
// db.sequelize.sync().then(console.log('synchronisation'));

// db.sequelize.sync({ force: true }).then(() => {
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
//         intitule: "DSI"
//     });

//     db.Departement.create({
//         intitule: "DEE"
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
//         { labele: 'Low', config: '1' }
//     );
//     db.Priorite.create(
//         {labele: 'Medium', config: '2' }
//     );
//     db.Priorite.create(
//         { labele: 'Hight', config: '3' }
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

//        db.Action.create(
//          { label: 'Modifier', value: false,RoleId:1 }
//       );
//        db.Action.create(
//         { label: 'Supprimer', value: false,RoleId:1 }
//       );
//       db.Action.create(
//         { label: 'Ajouter', value: false,RoleId:1 }
//       );

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
//       db.User.create(
//         { email: 'Admin@gmail.com',username:'admin',password:'5555aaza',RoleId:'1',photo:'szdzdz' }
//        );
   
//     db.Projet.create({
      
//         titre: "PIPELINE",
//         debut: new Date(2022,10,12),
//         fin: new Date(2022,10,12),
//         RegionId: 1,
//         DepartementId: 2,
//         latitude: -16.9005,
//         longitude: 48.3961
//     });

//     db.Projet.create({
    
//         titre: "BARRAGE",
//         debut: new Date(2022,10,12),
//         fin: new Date(2022,10,12),
//         RegionId: 2,
//         DepartementId: 1,
//         latitude: -17.534,
//         longitude: 47.966
//     });

//     db.Projet.create({
      
//         titre: "HYGIENE",
//         debut: new Date(2022,10,12),
//         fin: new Date(2022,10,12),
//         RegionId: 3,
//         DepartementId: 2,
//         latitude: -16.7,
//         longitude: 45.966
//     });

//     db.Projet.create({
 
//         titre: "TRANSPORT",
//         debut: new Date(2022,10,12),
//         fin: new Date(2022,10,12),
//         RegionId: 4,
//         DepartementId: 1,
//         latitude: -20.915,
//         longitude: 47.043
//     });

//     db.Projet.create({
   
//         titre: "FORMATION",
//         debut:new Date(2022,10,12),
//         fin: new Date(2022,10,12),
//         RegionId: 5,
//         DepartementId: 2,
//         latitude: -17.827,
//         longitude: 47.966
//     });

//     db.Projet.create({

//         titre: "CONSTRUCTION",
//         debut:new Date(2022,10,12),
//         fin:new Date(2022,10,12),
//         RegionId: 1,
//         DepartementId: 1,
//         latitude: -20.827,
//         longitude: 47.966
//     });

//     db.Tache.create(
//         {
//             debut: new Date(2022,10,12),
//             fin: new Date(2022,10,12),
//             titre: 'Tache1',
//             description: 'description de la tahce',
//             output: 'ceci est la sortie',
//             StatutId: 1,
//             PrioriteId: 1,
//             ProjetId: 1,
//             estAlerteur: true,
//             latitude: -16.9005,
//             longitude: 48.3961
//         }
//     )

//     db.Tache.create(
//         {
//             debut:new Date(2022,10,12),
//             fin: new Date(2022,10,12),
//             titre: 'Tache2',
//             description: 'description de la tahce',
//             output: 'ceci est la sortie',
//             StatutId: 1,
//             PrioriteId: 2,
//             ProjetId: 1,
//             estAlerteur: false,
//             latitude: -17.534,
//             longitude: 47.966
//         }
//     );
//     db.Tache.create(
//         {
//             debut: new Date(2022,10,12),
//             fin: new Date(2022,10,12),
//             titre: 'Tache3',
//             description: 'description de la tahce',
//             output: 'ceci est la sortie',
//             StatutId: 1,
//             PrioriteId: 3,
//             ProjetId: 1,
//             estAlerteur: false,
//             latitude: -16.7,
//             longitude: 45.966
//         });
//     db.Tache.create(
//         {
//             debut:new Date(2022,10,12),
//             fin: new Date(2022,10,12),
//             titre: 'Tache4',
//             description: 'asd description de la tahce',
//             output: 'ceci est lasdasa sortie',
//             StatutId: 2,
//             PrioriteId: 1,
//             ProjetId: 1,
//             estAlerteur: false,
//             latitude: -20.915,
//             longitude: 47.043
//         });
//     db.Tache.create({
//         debut: new Date(2022,10,12),
//         fin:new Date(2022,10,12),
//         titre: 'Tache5',
//         description: 'dzxczexscription de la tahce',
//         output: 'ceci est la zxczxccsortie',
//         StatutId: 3,
//         PrioriteId: 2,
//         ProjetId: 1,
//         estAlerteur: false,
//         latitude: -20.827,
//         longitude: 47.966
//     }
//     );

// });

// db.sequelize.sync({ force: true }).then(() => {
//     console.log('synchronysation des models');
// })


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