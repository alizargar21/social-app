const express = require("express");
const router = express.Router();
const  {check}  = require("express-validator");
const fileUpload = require("../middleware/file-upload")
const usersController = require("../controller/users-controllers");
router.get("/", usersController.getUsers);
router.post(
  "/signup",
  fileUpload.single('image'),
  [
      check("name").isLength({ min: 3 }),
      
    check("email").normalizeEmail().isEmail(),
    check("password").isLength({min:4})
  ],
  usersController.signup
);
router.post("/login", usersController.login);

module.exports = router;
