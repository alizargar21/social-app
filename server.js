const express = require("express");
const bodyParser = require("body-parser");
const HttpError = require("./models/http-model");
const postsRoutes = require("./routes/posts-routes");
const usersRoutes = require("./routes/users-routes")
const app = express();
//handle parse data from body with this middleware
app.use(bodyParser.json());
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
  if (res.headerSet) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "Unknown Error" });
});

app.listen(5000);
