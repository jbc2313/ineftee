const express = require('express');
const router = express.Router();
const postCtrl = require('../controller/postController');

router.get('/', postCtrl.showPosts);

router.get('/new', postCtrl.showNew);

module.exports = router;