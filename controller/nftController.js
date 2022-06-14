const Nft = require('../models/nft');


const showNfts = (req, res) => {
    Nft.find({})
    .then(n => res.render('nft/index', {n}))
};

const newForm = (req, res) => {
    res.render('nft/new')
};

const saveNft = (req, res) => {
    const nftName = req.body.nftname;
    const nftType = req.file.mimetype;
    const nftData = req.file.buffer;
    Nft.create({
        name: nftName,
        nftFile: {
            data: nftData,
            contentType: nftType,
        }
    })
    res.redirect('/nft')
};

const showOneNft = (req, res) => {
    Nft.findById(req.params.id)
    .then(n => res.render('nft/show', {n}))
};





module.exports = {
    saveNft,
    showNfts,
    newForm,
    showOneNft,



};