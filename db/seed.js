const mongoose = require('mongoose');
require('dotenv').config();


const User = require('../models/user');
const userSeeds = require('./userseed.json');

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
})
.then(() => console.log('DB connection success'))


User.deleteMany({})
.then(()=>{
    return User.insertMany(userSeeds)
    .then((users)=> {
        console.log(users)
    })
})
.finally(()=>{
    process.exit()
});