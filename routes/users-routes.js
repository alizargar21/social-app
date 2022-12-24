const express = require("express");
const router = express.Router();
const { check } = require("express-validator");

const usersController = require("../controller/users-controllers");
router.get("/", usersController.getUsers);
router.post(
  "/signup",
  [
      check("name").isLength({ min: 3 }),
    check("email").normalizeEmail().isEmail(),
    check("password").isLength({min:8})
  ],
  usersController.signup
);
router.post("/login", usersController.login);

module.exports = router;
