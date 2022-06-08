const Post = require('../models/post');

const showPosts = (req, res) => {
    Post.find({})
    .then(posts => res.render('post/posts', {posts}))
}

const showNew = (req, res) => {
    res.render('post/new')
}

module.exports = {
    showPosts,
    showNew,


};