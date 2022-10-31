require('dotenv').config(); // this is important!
module.exports = {
  "development": { //test
    "username": "postgres",
    "password": "root",
    "database": "Ministera",
    "host": "localhost",
    "dialect": "postgres"
  },
  "test": {
    "username": "postgres",
    "password": "mdpprom13",
    "database": "ministera",
    "host": "localhost",
    "dialect": "postgres"
  },
  "production": {
    "username": "postgres",
    "password": "mdpprom13",
    "database": "ministera",
    "host": "localhost",
    "dialect": "postgres"
  }
};


