const Sequelize = require('sequelize');

exports.db = new Sequelize('react_db' , 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
})

