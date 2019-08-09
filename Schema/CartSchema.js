const Sequelize = require('sequelize');
const { db } = require('../db.js');

const Product = require('../Schema/ProductSchema');

const Cart = db.define('tbl_cart', {
    cart_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    product_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    qty: {
        type: Sequelize.INTEGER,
        defaultValue: 1
    },
    isDelete: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    }
});

Cart.belongsTo(Product, {foreignKey: 'product_id'});
Product.hasMany(Cart, {foreignKey: 'product_id'});

Cart.sync({force: false}).then((res) => {
    console.log('Cart Table Created successfully!');
})
.catch((err) => {
    console.log('Error in creation of Cart table: ', err);
})

module.exports = Cart;