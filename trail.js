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

function getTrail(){
    
    const { name, email, phone, course, country } = req.body;

  var mailOption = {
    from: "Q Quranic - qquranicdomain@gmail.com",
    to: "mdkprogrammer@gmail.com",
    subject: "Get Free Trial",
    text: "This email form Q Quranic",
    html: ` <h2>Information</h2>
              <p>Name: ${name}</p>
              <p>Phone: ${email}</p>
              <p>Email: ${phone}</p>
              <p>Address: ${course}</p>
              <p>Address: ${country}</p>`
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

module.exports = getTrail;