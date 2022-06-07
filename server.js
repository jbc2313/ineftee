const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const passport = require('passport');


//load the env file
require('dotenv').config();
//connect to mongodb
require('./db/connection');
// init express
const app = express();
const port = 5005;

//require routes



//view engine setup
app.set('view engine', 'ejs');

//basic express setup
app.use(express.static('./public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(passport.initialize());
app.use(passport.session());

//passover user to all ejs views (thanks kareem!)
app.use(function (req, res, next) {
    res.locals.user = req.user;
    next();
});


//mount all routes

app.listen(port, () => {
    console.log(`Listening on port ${port} `)
})