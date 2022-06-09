const express = require('express');
const router = express.Router();
const nftCtrl = require('../controller/nftController');
const multer = require('multer');

const storage = multer.memoryStorage();
upload = multer({storage: storage})




router.get('/', nftCtrl.showNfts);

router.get('/new', nftCtrl.newForm);

router.get('/:id', nftCtrl.showOneNft);

router.post('/', upload.single('nftFile'), nftCtrl.saveNft);



module.exports = router;