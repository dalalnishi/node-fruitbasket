const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

var ImageDir = require('path').join(__dirname, '/Images');
app.use(express.static(ImageDir));

var ThumbDir = require('path').join(__dirname, '/Images/ThumbnailImages');
app.use(express.static(ThumbDir));

//Schemas
const User = require('./Schema/UserSchema.js');
const Product = require('./Schema/ProductSchema.js');
const Cart = require('./Schema/CartSchema.js');

//Database file
const { db } = require('./db.js');

//Routes
const UserRoute = require('./Router/User_route');
const ProductRoute = require('./Router/Product_route');
const CartRoute = require('./Router/Cart_route');

app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use('/images', express.static(ImageDir));
app.use('/thumbimages', express.static(ThumbDir));

app.use('/user', UserRoute);
app.use('/products', ProductRoute);
app.use('/cart', CartRoute);

db.authenticate()
    .then(() => {
        console.log('Database connection has been established successfully!');
    })
    .catch(err => {
        console.log('Database connection error: ', err);
    })

app.listen(5001, () => {
    console.log('Running on Port: ', 5001);
})