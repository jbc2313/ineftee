const express = require('express');
const router = express.Router();
const { auth } = require('express-openid-connect');
const { requiresAuth } = require('express-openid-connect');
const config = require('../config/authoConfig');
const userCtrl = require('../controller/userController');
const user = require('../models/user');

// auth router attaches /login, /logout, and /callback routes to the baseURL
router.use(auth(config));
  

router.get('/', userCtrl.loginoutPage);

router.get('/user/setup', requiresAuth(), userCtrl.createUser);

router.get('/user/profile', requiresAuth(), userCtrl.showProfile);

router.get('/user/:id/edit', userCtrl.showEditProfile);

router.put('/user/:id', userCtrl.editProfile)


module.exports = router;