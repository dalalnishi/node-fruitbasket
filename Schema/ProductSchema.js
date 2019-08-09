const Sequelize = require('sequelize');
const { db } = require('../db.js');

const ProductSchema = db.define('tbl_fruits', {
    product_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    product_name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    product_desc: {
        type: Sequelize.STRING,
        allowNull: false
    },
    product_price: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    product_img: {
        type: Sequelize.STRING,
        allowNull: false
    },
    isDelete: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    }
})

ProductSchema.sync({force: false})
    .then(() => {
        console.log('Product table created Successfully!');
    })
    .catch(err => {
        console.log('Error in creation of Product table: ', err);
    })

module.exports = ProductSchema;