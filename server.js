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
const authRoutes = require('./routes/authRoutes');


//view engine setup
app.set('view engine', 'ejs');

//basic express setup
app.use(express.static('./public'));
app.use(methodOverride('_method'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//init for session Cookie
app.use(session({
    secret: 'SEIRocks!',
    resave: false,
    saveUninitialized: true
}));


//passover user to all ejs views (thanks kareem!)
app.use(function (req, res, next) {
    res.locals.user = req.user;
    next();
});

//SETUP OAUTH

const config = {
    authRequired: false,
    auth0Logout: true,
    secret: process.env.SECRET,
    baseURL: process.env.BASE_URL,
    clientID: process.env.CLIENT_ID,
    issuerBaseURL: process.env.ISSUER_BASE_URL
  };
  
  // auth router attaches /login, /logout, and /callback routes to the baseURL
  app.use(auth(config));
  

  //END AUTHO

  // move to auth routes
  // req.isAuthenticated is provided from the auth router
  app.get('/', (req, res) => {
    res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
  });

  app.get('/profile', requiresAuth(), (req, res) => {
    res.send(JSON.stringify(req.oidc.user));
  });

  



//mount all routes
app.use('/user', userRoutes);
app.use('/post', postRoutes);
app.use('/nft', nftRoutes);
app.use('/', authRoutes);



app.listen(port, () => {
    console.log(`Listening on port ${port} `)
})