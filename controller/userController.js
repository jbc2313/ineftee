const User = require('../models/user');
const router = require('../routes/userRoutes');


const createUser = (req, res) => {
    User.findOne({ 'email': req.oidc.user.email})
    .then(user => {
        if(user === null) {
            const newUser = new User({
                name: req.oidc.user.nickname,
                username: req.oidc.user.name,
                email: req.oidc.user.email
            });
            newUser.save();
            res.redirect('/user/profile')
        }else {
            
            res.redirect('/post')
        }
    });
};

    


const showProfile = (req, res) => {

};

const editProfile = (req, res) => {

};

const loginoutPage = (req, res) => {
  let auth =  req.oidc.isAuthenticated()
  let user = req.oidc.user
  if(auth){
      res.redirect('/user/setup');
  }else
  res.render('index', {auth, user})
}


module.exports = {
    createUser,
    showProfile,
    editProfile,
    loginoutPage,

};