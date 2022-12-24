const express = require("express");
const router = express.Router();
const HttpError = require("../models/http-model")
const posts = [
  {
    id: "p1",
    title: "post title",
    description: "des title",
    creator: "u1",
  },
];
router.get("/api/posts/:pid", (req, res, next) => {
  const postId = req.params.pid;
  const post = posts.find((post) => {
    return post.id === postId;
  });
  if(!post){
    return next(
        new HttpError("Not Found" , 404)
    )
  }
  res.json({ post: post });
});
router.get("/api/posts/user/:uid", (req, res, next) => {
  const userId = req.params.uid;
  const post = posts.find(post => {
    return post.creator === userId
  })
  if(!post){
    return next(
        new HttpError("Not Found" , 404)
    )
  }
  res.json({post})
});
module.exports = router;
