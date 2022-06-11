const express = require('express');
const router = express.Router();
const postCtrl = require('../controller/postController');

router.get('/post', postCtrl.showPosts);

router.get('/post/new', postCtrl.showNew);

router.post('/post', postCtrl.createPost);

router.get('/post/:id', postCtrl.showOnePost);

router.get('/post/:id/edit', postCtrl.showEdit);

router.put('/post/:id', postCtrl.editPost);

router.delete('/post/:id', postCtrl.deletePost);

module.exports = router;