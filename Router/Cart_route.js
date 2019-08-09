const { Router } = require('express');
const router = Router();

const { addCartProducts, getCartItems, removeCartItems, changeQuantity } = require('../Controller/cartController');

router.post('/addCart', (req, res, next) => {

    addCartProducts( req.body, (err, result) => {
        if(err) {
            res.statusCode = 400;
            res.json(err);
        }
        else {
            res.statusCode = 201;
            res.json(result);
        }
    })
});

router.get('/getCart/:uid', (req, res, next) => {

    getCartItems( req.params.uid, (err, result) => {
        if(err) {
            res.statusCode = 400;
            res.json(err);
        }
        else {
            res.statusCode = 200;
            res.json(result);
        }
    })
});

router.delete('/deleteItem/:id', (req, res, next) => {

    removeCartItems(req.params.id, (err, result) => {
        if(err) {
            res.statusCode = 400;
            res.json(err);
        }
        else {
            res.statusCode = 200;
            res.json(result);
        }
    })
})

router.put('/changeQty', (req, res, next) => {

    changeQuantity(req.body, (err, result) => {
        if(err) {
            res.statusCode = 400;
            res.json(err);
        }
        else {
            res.statusCode = 200;
            res.json(result);
        }
    })
})

module.exports = router;