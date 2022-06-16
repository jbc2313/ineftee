const mongoose = require('mongoose');



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