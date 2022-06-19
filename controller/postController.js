const Post = require('../models/post');
const User = require('../models/user');
const router = require('../routes/postRoutes');

const showPosts = (req, res) => {
    Post.find({})
    .populate('owner')
    .then(posts => res.render('post/index', {posts}))
};

const showNew = (req, res) => {
    res.render('post/new')
};

const createPost = (req, res) => {
    // console.log('req.body is')
    // console.log(req.body);
    // console.log('req.file is next')
    // console.log(req.file)
    // console.log('nfttype and nftdaya are next')
    // console.log(nftType);
    // console.log(nftData);
    const nftName = req.body.nftname;
    const nftType = req.file.mimetype;
    const nftData = req.file.buffer;
    User.findOne({'email': req.oidc.user.email})
    .then(user => {
      return  Post.create({
            name: req.body.name,
            content: req.body.content,
            owner: user._id,
            nft: {
                name: nftName,
                nftFile: {
                    data: nftData,
                    contentType: nftType,
                }
            }
        })
    })
    .then(post => {
        User.findOneAndUpdate({"email": req.oidc.user.email}, {$push: {posts: post._id}})
        .then(user => console.log(user))
    })
    .then(res.redirect('/post'))
};

const showOnePost = (req, res) => {
    Post.findById(req.params.id)
    .populate('owner')
    .then(post => res.render('post/show', {post}))
};

const deletePost = (req, res) => {
    let id = req.params.id;
    console.log(id)
    User.findOneAndUpdate({"email": req.oidc.user.email}, {$pull: {posts: id }}, {new: true})
    .then(user => console.log(user.posts))
    Post.findByIdAndDelete(req.params.id)
    .then(console.log('post deleted'))
    res.redirect('/post');
    
};

const showEdit = (req, res) => {
    Post.findById(req.params.id)
    .then(post => res.render('post/edit', {post}))
}

const editPost = (req, res) => {
    Post.findByIdAndUpdate(req.params.id, req.body)
    .then(res.redirect('/post'))
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