const HttpError = require("../models/http-model");

let posts = [
    {
      id: "p1",
      title: "post title",
      description: "des title",
      creator: "u1",
    },
  ];
const getPostById = (req, res, next) => {
  const postId = req.params.pid;
  const post = posts.find((post) => {
    return post.id === postId;
  });
  if (!post) {
    return next(new HttpError("Not Found", 404));
  }
  res.json({ post: post });
};
const getPostByUserId = (req, res, next) => {
  const userId = req.params.uid;
  const post = posts.find((post) => {
    return post.creator === userId;
  });
  if (!post) {
    return next(new HttpError("Not Found", 404));
  }
  res.json({ post });
};
const createPost = (req, res, next) => {
  const { title, description, creator } = req.body;
  const createdPost = {
    title : title ,
    description :description,
    creator: creator,

  };
  posts.push(createdPost)
  res.status(201)
  res.json({post : createdPost})
};

const deletePost =(req ,res, next) => {
   const postId =  req.params.id
    posts =  posts.filter(post => post.id !== postId)
    res.status(200).json({message : "Post Deleted"})
}

exports.getPostById = getPostById;
exports.getPostByUserId = getPostByUserId;
exports.createPost = createPost;
exports.deletePost = deletePost