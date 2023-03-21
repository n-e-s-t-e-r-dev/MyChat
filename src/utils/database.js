const { Sequelize } = require('sequelize');

const db = new Sequelize({
    database: 'chat',
    port: 5432,
    host: 'localhost',
    username: 'postgres',
    password: 'root',
    dialect: 'postgres'
});

module.exports = db;