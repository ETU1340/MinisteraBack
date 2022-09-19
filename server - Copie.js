const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();


var corsOptions = {
    origin: "http://localhost:3000"
};


// const db = require("./app/models");
// db.sequelize.sync();


app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
// app.get("/", (req, res) => {
//     Selection

//     res.json({ message: "Welcome to bezkoder application." });
// });

//route 
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
require('./app/routes/projet.routes')(app);

// require('./app/routes/commemntaire.routes')(app);
// const db = require("./app/models");
// const Role = db.role;
// db.sequelize.sync({ force: true }).then(() => {
//     console.log('Drop and Resync Db');
//     initial();
// });

// function initial() {
//     Role.create({
//         id: 1,
//         name: "user"
//     });

//     Role.create({
//         id: 2,
//         name: "moderator"
//     });

//     Role.create({
//         id: 3,
//         name: "admin"
//     });

// }

// set port, listen for requests
// const PORT = process.env.PORT || 8080;
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});