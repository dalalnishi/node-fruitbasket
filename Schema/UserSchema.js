const Sequelize = require('sequelize');
const { db } = require('../db.js');

const User = db.define('tbl_user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    fullname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false
    },
    city: {
        type: Sequelize.STRING,
        allowNull: false
    },
    gender: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

User.sync({ force: false }).then((res) => {
    console.log('User Table Created successfully!');
}).catch((err) => {
    console.log('Error in creation of user table: ', err);
})

module.exports = User;