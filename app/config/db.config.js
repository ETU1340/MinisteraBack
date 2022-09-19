module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "mdpprom13",
    DB: "ministera",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};