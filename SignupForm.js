const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
require("./dbConn");
const User = require("./userSchema");
const LoginCheck = require("./LoginCheck");
const LoginForm = require("./LoginForm");

// middle wares
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

//Sign Up Routes
function SignupForm(req, res) {
  const { name, email, phone } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      res.send({ message: "User already registerd!" });
    } else {
      const user = new User({
        name,
        email,
        phone,
      });
      user.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({
            message: "Successfully registered we will get back to you asap.",
          });
          localStorage.setItem("userInfo", JSON.stringify(user));
        }
      });
    }
  });
}

module.exports = SignupForm;
