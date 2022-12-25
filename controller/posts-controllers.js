const HttpError = require("../models/http-model");
const { validationResult } = require("express-validator");
const Post = require("../models/post");

const getPostById = async (req, res, next) => {
  const postId = req.params.pid;
  let post;
  try {
    post = await Post.findById(postId);
  } catch (err) {
    const error =  new HttpError("Could not find a post" , 500)
    return next(error)
  }
  if(!post){
    const error =  new HttpError("Could not find a post" , 500)
    return next(error)
  }
  res.json({post : post.toObject({getters:true})})
};



const getPostByUserId =async (req, res, next) => {
  const userId = req.params.uid;
  let userPost
  try {
      userPost = await Post.find({creator : userId})
  } catch (err) {
    const error =  new HttpError("Could not find a post" , 500)
    return next(error)
  }
  if (!userPost) {
    return next(new HttpError("Not Found", 404));
  }
  res.json({userPost : userPost.map(post => post.toObject({getters : true}))});
};



const createPost = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new HttpError("Invalid Inputs", 422);
  }
  const { title, description, creator } = req.body;
  const createdPost = new Post({
    title: title,
    description: description,
    creator: creator,
    image: "url",
  });
  try {
    await createdPost.save();
  } catch (err) {
    const error = new HttpError("Creating Post Failed", 500);
    return next(error);
  }
  res.status(201).json({ post: createdPost });
};



const deletePost = async(req, res, next) => {
  const postId = req.params.id;
  let post 
  try {
      post = await Post.findOneAndRemove(postId)
    
    } catch (err) {
      const error = new HttpError("Could not find post", 500);
      return next(error);
    }
  
  res.json({ message: "Post Deleted" });
};

exports.getPostById = getPostById;
exports.getPostByUserId = getPostByUserId;
exports.createPost = createPost;
exports.deletePost = deletePost;
