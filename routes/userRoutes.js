const express = require('express');
const router = express.Router();
const { auth } = require('express-openid-connect');
const { requiresAuth } = require('express-openid-connect');
const config = require('../config/authoConfig');
const userCtrl = require('../controller/userController');

// auth router attaches /login, /logout, and /callback routes to the baseURL
router.use(auth(config));
  
// router.get('/', (req, res) => {
//     res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
// });

router.get('/', userCtrl.loginoutPage);

router.get('/user/setup', requiresAuth(), userCtrl.createUser);




router.get('/user/profile', requiresAuth(), (req, res) => {
    res.send(JSON.stringify(req.oidc.user));

});

module.exports = router;