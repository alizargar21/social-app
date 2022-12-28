const HttpError = require("../models/http-model");
const { validationResult } = require("express-validator");
const User = require("../models/user");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")
const getUsers = async(req, res, next) => {
  let users
  try {
    // find method returned all data
    // we can delete password ? VVVV
   users= await User.find({},"-password")
  } catch (err) {
    const error = new HttpError("get users failed", 500);
    return next(error);
  }
  res.json({users : users.map((user)=>user.toObject({getters : true}))})
};
const login = async (req, res, next) => {
  const { email, password } = req.body;
  let existedUser;
  try {
    existedUser = await User.findOne({ email: email });
  } catch (err) {
    const error = new HttpError("login failed", 500);
    return next(error);
  }
  if (!existedUser || existedUser.password !== password) {
    const error = new HttpError("Email or password is not correctly", 401);
    return next(error);
  }

  let isValidPassword = false
  try {
  isValidPassword =   await bcrypt.compare(password , existedUser.password)
  } catch (err) {
    const error = new HttpError("Could not login", 500);
    return next(error);
  }

  if(isValidPassword){
    const error = new HttpError("Invalid password", 401);
    return next(error);
  }
  res.json({ message: "logged in ..."  , user: existedUser.toObject({getters: true})});
};

const signup = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new HttpError("invalid inputs", 422);
  }
  const { name, email, password } = req.body;

  let existedUser;
  try {
    existedUser = await User.findOne({ email: email });
  } catch (err) {
    const error = new HttpError("signup failed", 500);
    return next(error);
  }
  if (existedUser) {
    const error = new HttpError("User already exist", 422);
    return next(error);
  }
  let hashedPassword
try {
  hashedPassword= await   bcrypt.hash(password , 12)
} catch (err) {
  const error = new HttpError("Could not create user", 500);
  return next(error);
}

  const createdUser = new User({
    name: name,
    email: email,
    password: hashedPassword,
    posts: [],
    image: req.file.path,
  });
  try {
    await createdUser.save();
  } catch (err) {
    const error = new HttpError("signup failed cc", 500);
    return next(error);
  }

  res.status(201).json({ user: createdUser.toObject({ getters: true }) });
};

exports.getUsers = getUsers;
exports.login = login;
exports.signup = signup;
