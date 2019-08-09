const Cart = require('../Schema/CartSchema');

const Sequelize = require('sequelize');
const { db } = require('../db.js');

exports.addCartProducts = (body, done) => {

    Cart.create(body).then((doc) => {
        if(doc) {
            done(null, doc);
        }
    })
    .catch(err => {
        done(err);
    })
}

exports.getCartItems = (uid, done) => {

    db.query("SELECT c.qty, f.* FROM `tbl_carts` AS c, `tbl_fruits` AS f WHERE c.product_id = f.product_id AND c.isDelete = 0 AND c.user_id ="+uid, { type: Sequelize.QueryTypes.SELECT })
        .then((doc) => {
            done (null, doc);
        })
        .catch((err) => {
            done (err);
        })
}

exports.removeCartItems = (id, done) => {

    db.query("DELETE FROM `tbl_carts` WHERE product_id ="+id)
        .then((doc) => {
            done(null, doc);
        })
        .catch((err) => {
            done(err);
        })
}

exports.changeQuantity = (body, done) => {

    db.query("UPDATE `tbl_carts` SET qty="+body.qty+" WHERE product_id="+body.product_id+" AND user_id="+body.user_id)
        .then((doc) => {
            done(null, doc);
        })
        .catch((err) => {
            done(err);
        })
}