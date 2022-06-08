const mongoose = require('mongoose');


//Potentially going to put nft-file schema her and post schema here too
// Or i will create models for them and refrence them in the user schema

const postSchema = new mongoose.Schema({
    name: String,
    content: String,
    owner: {
        //Reference another mongoDB model
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }},
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Post', postSchema);