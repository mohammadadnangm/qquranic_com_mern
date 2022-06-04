const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
require("./dbConn");
const User = require("./userSchema");
const LoginCheck = require("./LoginCheck");
const LoginForm = require("./LoginForm");
const SignupForm = require("./SignupForm");
const ContactusInfo = require("./ContactusInfo");
dotenv.config({ path: "./config.env" });

const PORT = process.env.PORT || 5001;

// middlewares
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());

//backend server check running
// app.get("/", (req, res) => {
//   res.send("Backend Server and API's are Running!");
// });

//about me page here...
app.get("/aboutme", LoginCheck);

//sign in route
app.post("/signin", LoginForm);

//Signup/Register Route
app.post("/signup", SignupForm);

//contact us form route
app.post("/contactus", ContactusInfo);

if (process.env.NODE_ENV == "production") {
  app.use(express.static("client/build"));
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// listening server port of node and express
app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
