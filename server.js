const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const dotenv = require('dotenv');
dotenv.config();

var corsOptions = {
    // origin: "http://localhost:3000"
    origin: "http://localhost:19006"
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//route 
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
require('./app/routes/projet.routes')(app);
require('./app/routes/taches.routes')(app);
require('./app/routes/historique.routes')(app);
// require('./app/routes/region.routes')(app);
require('./app/routes/departement.routes')(app);
// require('./app/routes/priority.routes')(app);
// require('./app/routes/status.routes')(app);
const db = require("./app/models");

// db.sequelize.sync({ force: true }).then(() => {
//     console.log('synchronysation des models');
//     db.Region.create({
//         id: 1,
//         intitule: "Analamanga"
//     });

//     db.Region.create({
//         id: 2,
//         intitule: "Diana"
//     });

//     db.Region.create({
//         id: 3,
//         intitule: "Sava"
//     });

//     db.Region.create({
//         id: 4,
//         intitule: "Boeny"
//     });

//     db.Region.create({
//         id: 5,
//         intitule: "Menabe"
//     });

//     db.Departement.create({
//         intitule: "DSI"
//     });

//     db.Departement.create({
//         intitule: "DEE"
//     });

//     db.Statut.create(
//         { id: 1, labele: 'Todo' },
//     );

//     db.Statut.create(
//         { id: 2, labele: 'In Progress' },
//     );
//     db.Statut.create(
//         { id: 3, labele: 'Finished' }
//     );
//     db.Priorite.create(
//         { id: 1, labele: 'Low', config: '1' }
//     );
//     db.Priorite.create(
//         { id: 2, labele: 'Medium', config: '2' }
//     );
//     db.Priorite.create(
//         { id: 3, labele: 'Hight', config: '3' }
//     );
//     db.Projet.create({
//         id: 1,
//         titre: "PIPELINE",
//         debut: new Date(),
//         fin: new Date(),
//         regionId: 1,
//         departementId: 2,
//         latitude: -16.9005,
//         longitude: 48.3961
//     });

//     db.Projet.create({
//         id: 2,
//         titre: "BARRAGE",
//         debut: new Date(),
//         fin: new Date(),
//         regionId: 2,
//         departementId: 1,
//         latitude: -17.534,
//         longitude: 47.966
//     });

//     db.Projet.create({
//         id: 3,
//         titre: "HYGIENE",
//         debut: new Date(),
//         fin: new Date(),
//         regionId: 3,
//         departementId: 2,
//         latitude: -16.7,
//         longitude: 45.966
//     });

//     db.Projet.create({
//         id: 4,
//         titre: "TRANSPORT",
//         debut: new Date(),
//         fin: new Date(),
//         regionId: 4,
//         departementId: 1,
//         latitude: -20.915,
//         longitude: 47.043
//     });

//     db.Projet.create({
//         id: 5,
//         titre: "FORMATION",
//         debut: new Date(),
//         fin: new Date(),
//         regionId: 5,
//         departementId: 2,
//         latitude: -17.827,
//         longitude: 47.966
//     });

//     db.Projet.create({
//         id: 6,
//         titre: "CONSTRUCTION",
//         debut: new Date(),
//         fin: new Date(),
//         regionId: 1,
//         departementId: 1,
//         latitude: -20.827,
//         longitude: 47.966
//     });

//     db.Tache.create(
//         {
//             debut: new Date(),
//             fin: new Date(),
//             titre: 'ceci sdfest le titre de msdfa tache',
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
//             debut: new Date(),
//             fin: new Date(),
//             titre: 'ceci sdfest le titre de msdfa tache',
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
//             debut: new Date(),
//             fin: new Date(),
//             titre: 'ceci est le titre de ma tache',
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
//             debut: new Date(),
//             fin: new Date(),
//             titre: 'new task 1',
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
//         debut: new Date(),
//         fin: new Date(),
//         titre: 'zxcz x ceci est le titre de ma tache',
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



const PORT = 8080;
// const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});