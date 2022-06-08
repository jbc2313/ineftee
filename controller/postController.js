const res = require('express/lib/response');
const Post = require('../models/post');

const showPosts = (req, res) => {
    Post.find({})
    .then(posts => res.render('post/index', {posts}))
};

const showNew = (req, res) => {
    res.render('post/new')
};

const createPost = (req, res) => {
    console.log(req.body);
    Post.create(req.body)
    .then(post => res.redirect('/post'))
};

const showOnePost = (req, res) => {
    Post.findById(req.params.id)
    .then(post => res.render('post/show', {post}))
};

const deletePost = (req, res) => {
    Post.findByIdAndDelete(req.params.id)
    .then(res.redirect('/post'))
};

const showEdit = (req, res) => {
    Post.findById(req.params.id)
    .then(post => res.render('post/edit', {post}))
}

const editPost = (req, res) => {
    Post.findByIdAndUpdate(req.params.id, req.body)
    .then(post => res.redirect('/post'))
};

module.exports = {
    showPosts,
    showNew,
    createPost,
    showOnePost,
    deletePost,
    editPost,
    showEdit,

};