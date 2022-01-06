const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
require("./dbConn");
const User = require("./userSchema");
const LoginCheck = require("./LoginCheck");
const LoginForm = require("./LoginForm");
const SignupForm = require("./SignupForm");
const ContactusInfo = require("./ContactusInfo");
const logout = require("./logout");
dotenv.config({ path: "./config.env" });

const PORT = process.env.PORT || 5001;
// middlewares
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

//about me page here...
app.get("/aboutme", LoginCheck);

//sign in route
app.post("/signin", LoginForm);

//Signup Route
app.post("/signup", SignupForm);

//contact us form route
app.post("/contactus", ContactusInfo);

//Logout page  route
app.get("/logout", (req, res) => {
  res.clearCookie("quranTutor", { path: "/" });
  res.status(200).send("user logged out");
});

if (process.env.NODE_ENV == "production") {
  app.use(express.static("quran-tutor-mern/build"));
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(__dirname, "quran-tutor-mern", "build", "index.html")
    );
  });
}

// listening server port of node and express
app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
