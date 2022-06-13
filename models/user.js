const mongoose = require('mongoose');


//Potentially going to put nft-file schema her and post schema here too
// Or i will create models for them and refrence them in the user schema

const userSchema = new mongoose.Schema({
    name: String,
    username: String,
    email: String,
    authId: String,
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Post'
    }]

});

module.exports = mongoose.model('User', userSchema);