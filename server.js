const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const session = require('express-session');
const passport = require('passport');


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

//init for passport
app.use(session({
    secret: 'SEIRocks!',
    resave: false,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

//passover user to all ejs views (thanks kareem!)
app.use(function (req, res, next) {
    res.locals.user = req.user;
    next();
});









//mount all routes
app.use('/user', userRoutes);
app.use('/post', postRoutes);
app.use('/nft', nftRoutes);



// initial route users will hit when they hit my app
app.get('/', (req, res) => {
    res.render('index');
})

app.listen(port, () => {
    console.log(`Listening on port ${port} `)
})