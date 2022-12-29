const fs = require("fs")
const path = require("path")
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// mongoose.set("strictQuery" ,false)
const HttpError = require("./models/http-model");
const postsRoutes = require("./routes/posts-routes");
const usersRoutes = require("./routes/users-routes");
const app = express();
//handle parse data from body with this middleware
app.use(bodyParser.json());
app.use('/uploads/images' , express.static(path.join('uploads' , 'images')))
//handle cors error
app.use((req, res, next) => { 
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  next();
});

//use api routes
app.use("/api/posts", postsRoutes);
app.use("/api/users", usersRoutes);

//handle unknown routes
app.use((req, res, next) => {
  const error = new HttpError("Not Found!!!", 404);
  throw error;
});
//error must be first argument
app.use((error, req, res, next) => {
  if(req.file){
    fs.unLink(req.file.path , (err)=>{
      console.log(err)
    })
  }  
  if (res.headerSet) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "Unknown Error" });
});
mongoose
  .connect("mongodb://127.0.0.1:27017/social-app")
  .then(() => {
    app.listen(5000);
    console.log("Connect To DATABASE");
  })
  .catch((err) => {
    console.log(err);
  });
