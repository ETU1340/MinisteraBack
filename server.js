const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const dotenv = require('dotenv');
dotenv.config();

var corsOptions = {
    origin: "http://localhost:19006"
    // origin: "http://192.168.1.62:19006"
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
require('./app/routes/region.routes')(app);
require('./app/routes/departement.routes')(app);
require('./app/routes/priorite.routes')(app);
require('./app/routes/tacheAlerte.routes')(app);
// const db = require("./app/models");
// db.sequelize.sync({ force: true }).then(() => {
//     console.log('synchronysation des models');
//         db.Region.create({
           
//             intitule: "Analamanga"
//         });
    
//         db.Region.create({
            
//             intitule: "Diana"
//         });
    
//         db.Region.create({
           
//             intitule: "Sava"
//         });
    
//         db.Region.create({
          
//             intitule: "Boeny"
//         });
    
//         db.Region.create({
            
//             intitule: "Menabe"
//         });
    
//         db.Departement.create({
//             intitule: "DSI"
//         });
    
//         db.Departement.create({
//             intitule: "DEE"
//         });
    
//         db.Statut.create(
//             {labele:'Todo'},
//         );

//        db.Statut.create(
//             {labele:'In Progress'},
//         );
//        db.Statut.create(
//             {labele:'Finished'}
//         );
//        db.Priorite.create(
//             {labele:'Bas',config:'2'}
//         );
//        db.Priorite.create(
//             {labele:'Normal',config:'12'}
//         );
//        db.Priorite.create(
//             {labele:'Haut',config:'24'}
//         );
//         db.Projet.create({
      
//         titre: "PIPELINE",
//         debut:new Date(),
//         fin:new Date(),
//         RegionId:1,
//         DepartementId:2,
//         latitude:-16.9005,
//         longitude:48.3961
//         });

//         db.Projet.create({
     
//         titre: "BARRAGE",
//         debut:new Date(),
//         fin:new Date(),
//         RegionId:2,
//         DepartementId:1,
//         latitude:-17.534,
//         longitude:47.966
//         });

//         db.Projet.create({
       
//         titre: "HYGIENE",
//         debut:new Date(),
//         fin:new Date(),
//         RegionId:3,
//         DepartementId:2,
//         latitude:-16.7,
//         longitude:45.966
//         });

//         db.Projet.create({
      
//         titre: "TRANSPORT",
//         debut:new Date(),
//         fin:new Date(),
//         RegionId:4,
//         DepartementId:1,
//         latitude:-20.915,
//         longitude:47.043
//         });
        
//         db.Projet.create({
      
//         titre: "FORMATION",
//         debut:new Date(),
//         fin:new Date(),
//         RegionId:5,
//         DepartementId:2,
//         latitude:-17.827,
//         longitude:47.966
//         });

//         db.Projet.create({
 
//         titre: "CONSTRUCTION",
//         debut:new Date(),
//         fin:new Date(),
//         RegionId:1,
//         DepartementId:1,
//         latitude:-20.827,
//         longitude:47.966
//         });

//         db.Tache.create(
//             {
             
//                 debut:new Date(),
//                 fin:new Date(),
//                 titre:'ceci sdfest le titre de msdfa tache',
//                 description:'description de la tahce',
//                 output:'ceci est la sortie',
//                 StatutId:1,
//                 PrioriteId:1,
//                 ProjetId:1,
//                 estAlerteur:true,
//                 latitude:-16.9005,
//                 longitude:48.3961
//             }
//         )
        

//    db.Tache.create(
//             {
             
//                 debut:new Date(),
//                 fin:new Date(),
//                 titre:'ceci sdfest le titre de msdfa tache',
//                 description:'description de la tahce',
//                 output:'ceci est la sortie',
//                 StatutId:1,
//                 PrioriteId:2,
//                 ProjetId:1,
//                 estAlerteur:false,
//                 latitude:-17.534,
//                 longitude:47.966
//             }
//     );
//     db.Tache.create(
//         {
       
//             debut:new Date(),
//             fin:new Date(),
//             titre:'ceci est le titre de ma tache',
//             description:'description de la tahce',
//             output:'ceci est la sortie',
//             StatutId:1,
//             PrioriteId:3,
//             ProjetId:1,
//             estAlerteur:false,
//             latitude:-16.7,
//             longitude:45.966
//         });
//         db.Tache.create(
//         {
    
//             debut:new Date(),
//             fin:new Date(),
//             titre:'new task 1',
//             description:'asd description de la tahce',
//             output:'ceci est lasdasa sortie',
//             StatutId:2,
//             PrioriteId:1,
//             ProjetId:1,
//             estAlerteur:false,
//             latitude:-20.915,
//             longitude:47.043
//         });
//         db.Tache.create({
   
//             debut:new Date(),
//             fin:new Date(),
//             titre:'zxcz x ceci est le titre de ma tache',
//             description:'dzxczexscription de la tahce',
//             output:'ceci est la zxczxccsortie',
//             StatutId:3,
//             PrioriteId:2,
//             ProjetId:1,
//             estAlerteur:false,
//             latitude:-20.827,
//             longitude:47.966
//         }
//         );
 
// });
   


const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});