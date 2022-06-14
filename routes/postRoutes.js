const express = require('express');
const router = express.Router();
const { auth } = require('express-openid-connect');
const { requiresAuth } = require('express-openid-connect');
const config = require('../config/authoConfig');
const postCtrl = require('../controller/postController');
const multer = require('multer');

const storage = multer.memoryStorage();
upload = multer({storage: storage})

router.get('/post', postCtrl.showPosts);

router.get('/post/new', requiresAuth(), postCtrl.showNew);

router.post('/post', upload.single('nftFile'), postCtrl.createPost);

router.get('/post/:id', postCtrl.showOnePost);

router.get('/post/:id/edit', requiresAuth(), postCtrl.showEdit);

router.put('/post/:id', postCtrl.editPost);

router.delete('/post/:id', postCtrl.deletePost);

module.exports = router;