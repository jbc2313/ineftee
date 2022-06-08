const express = require('express');
const router = express.Router();
const postCtrl = require('../controller/postController');

router.get('/', postCtrl.showPosts);

router.get('/new', postCtrl.showNew);

router.post('/', postCtrl.createPost);

router.get('/:id', postCtrl.showOnePost);

router.get('/:id/edit', postCtrl.showEdit);

router.put('/:id', postCtrl.editPost);

router.delete('/:id', postCtrl.deletePost);

module.exports = router;