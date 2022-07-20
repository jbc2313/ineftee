const User = require('../models/user');
const router = require('../routes/userRoutes');

//after login will route user to db setup *** after logout sends user to a login page
const loginoutPage = (req, res) => {
    let auth =  req.oidc.isAuthenticated()
    if(auth){
        res.redirect('/user/setup');
    }else
    res.redirect('/post');
  }

const createUser = (req, res) => {
    User.findOne({ 'email': req.oidc.user.email})
    .then(user => {
        if(user === null) {
            //first time login user is added to db
            const newUser = new User({
                name: req.oidc.user.nickname,
                username: req.oidc.user.name,
                email: req.oidc.user.email,
                authId: req.oidc.user.sub,
            });
            newUser.save();
            console.log(newUser);
            res.redirect('/post')
        }else {
            // user is already in db
            res.redirect('/post')
        }
    });
};


const showProfile = (req, res) => {
    console.log(req.oidc.user)
    User.findOne({"email": req.oidc.user.email})
    .populate('posts')
    .then(user => res.render('users/show', {user}))
    // this will show users info from AuthO
    // let user = req.oidc.user
    // res.render('users/show', {user})
};

const showEditProfile = (req, res) => {
    User.findById(req.params.id)
    .then(user => res.render('users/edit', {user}))
};

const editProfile = (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body)
    .then(user => res.redirect('/user/profile'))
}



module.exports = {
    createUser,
    showProfile,
    showEditProfile,
    loginoutPage,
    editProfile,

};