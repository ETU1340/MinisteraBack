const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const dotenv = require('dotenv');
dotenv.config();

var corsOptions = {
    origin: "http://localhost:3000"
    // origin: "http://localhost:19006"
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//route 
require('./app/routes/dash.routes')(app);
require('./app/routes/problemeTache.routes')(app);

require('./app/routes/sousTache.routes')(app);
require('./app/routes/commentaire.routes')(app);
require('./app/routes/tacheAlerte.routes')(app);

require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
require('./app/routes/projet.routes')(app);
require('./app/routes/taches.routes')(app);
require('./app/routes/historique.routes')(app);
require('./app/routes/departement.routes')(app);
// require('./app/routes/priority.routes')(app);
// require('./app/routes/status.routes')(app);
const db = require("./app/models");

// db.sequelize.sync({ force: true });



const PORT = 8080;
// const PORT = 3001;
app.listen(PORT, () => {
    console.log(`⚡Server is running on port ${PORT}.`);
});