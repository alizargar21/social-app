const express = require("express");
const router = express.Router();
const fileUpload = require("../middleware/file-upload")
const postControllers = require("../controller/posts-controllers");
const { check } = require("express-validator");
const checkAuth =   require('../middleware/check-auth')
router.get("/" , postControllers.getAllPosts)
router.get("/:pid", postControllers.getPostById);
router.get("/user/:uid", postControllers.getPostByUserId);

router.use(checkAuth)
router.post(
  "/",
  fileUpload.single('image'),
  [check("title").not().isEmpty(), 
  check("description").isLength({min : 4})],
  postControllers.createPost
);
router.delete("/:pid", postControllers.deletePost);
module.exports = router;
