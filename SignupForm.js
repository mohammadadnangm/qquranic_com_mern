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

const nodemailer = require("nodemailer");

//nodmailer mail sender detail
var transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp-mail.outlook.com",
  secureConnection: false,
  port: 587,
  tls: {
    ciphers: "SSLv3",
  },
  auth: {
    user: "qquranicdomain@gmail.com",
    pass: "yousufmalana99",
  },
  from: "qquranicdomain@gmail.com",
});

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
      var mailOption = {
        from: "Q Quranic - qquranicdomain@gmail.com",
        to: "mdkprogrammer@gmail.com",
        subject: "Register",
        text: "This email from Q Quranic",
        html: ` <h2>information email</h2>
                  <p>Email: ${name}</p>
                  <p>Address: ${email}</p>
                  <p>Address: ${phone}</p>`
      };
    
      //send email to user for verification of account
      transporter.sendMail(mailOption, function (err, info) {
        if (err) {
          res.end("Email not sent check your internet connection");
        } else {
          res.send();
        }
      });
    }
  });
}

module.exports = SignupForm;
