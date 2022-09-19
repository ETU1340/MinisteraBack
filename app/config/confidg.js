require('dotenv').config(); // this is important!
module.exports = {
  "development": { //test
      "username": "postgres",
      "password": "root",
      "database": "test",
      "host": "localhost",
      "dialect": "postgres"
  },
  "test": {
      "username": "postgres",
      "password": "root",
      "database": "test",
      "host": "127.0.0.1",
      "dialect": "postgres"
  },
  "production": {
      "username": "root",
      "password": "root",
      "database": "prod",
      "host": "127.0.0.1",
      "dialect": "postgres"
  }
};


