const nodemailer = require("nodemailer");

//nodmailer mail sender detail
var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "eastmedicalsystem@gmail.com",
    pass: "System...+++",
  },
});

function ContactusInfo(req, res) {
  const { firstName, lastName, phone, email, address, message } = req.body;

  if (!firstName || !lastName || !phone || !email || !address || !message) {
    res.end("all fields required");
  } else {
    var mailOption = {
      from: "crudics.com@gmail.com",
      to: "mdkprogrammer@gmail.com",
      subject: "Contact-Us",
      html: ` <h2>Contact From QQuranic</h2>
              <h4>Name: ${firstName} ${lastName}</h4>
              <h4>Phone: ${phone}</h4>
              <p>Email: ${email}</p>
              <p>Address: ${address}</p>
              <p>Message: ${message}</p>`,
    };

    //send email to user for verify
    transporter.sendMail(mailOption, function (err, info) {
      if (err) {
        res.end("Email not sent check your internet connection");
      } else {
        res.send();
      }
    });
  }
}

module.exports = ContactusInfo;
