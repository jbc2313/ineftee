const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const session = require('express-session');
const { auth } = require('express-openid-connect');
const { requiresAuth } = require('express-openid-connect');
const multer = require('multer');

//load the env file
require('dotenv').config();

//connect to mongodb
require('./db/connection');

// init express
const app = express();
const port = 5005;

//require routes
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const nftRoutes = require('./routes/nftRoutes');



//view engine setup
app.set('view engine', 'ejs');

//basic express setup
app.use(express.static('./public'));
app.use(methodOverride('_method'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));




//mount all routes
app.use(userRoutes);
app.use('/post', postRoutes);
app.use('/nft', nftRoutes);




app.listen(port, () => {
    console.log(`Listening on port ${port} `)
})