const express = require("express");
const router = express.Router();
const postControllers = require("../controller/posts-controllers");
const { check } = require("express-validator");
router.get("/api/posts/:pid", postControllers.getPostById);
router.get("/api/posts/user/:uid", postControllers.getPostByUserId);
router.post(
  "/",
  [check("title").not().isEmpty(), 
  check("description").isLength({min : 4})],
  postControllers.createPost
);
router.delete("/:pid", postControllers.deletePost);
module.exports = router;
