const express = require("express");
const router = express.Router();
const postControllers = require("../controller/posts-controllers")

router.get("/api/posts/:pid", postControllers.getPostById);
router.get("/api/posts/user/:uid", postControllers.getPostByUserId);
router.post("/" , postControllers.createPost)
router.delete("/:pid" ,postControllers.deletePost)
module.exports = router;
