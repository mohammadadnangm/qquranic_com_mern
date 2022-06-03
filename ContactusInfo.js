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

function ContactusInfo(req, res) {
  const { firstName, lastName, phone, email, address, message } = req.body;

  // if (!firstName || !lastName || !phone || !email || !address || !message) {
  //   res.end("all fields required");
  // } else {
  var mailOption = {
    from: "Q Quranic - Online Quran Teaching Academy",
    to: "Khayum1@hotmail.co.uk",
    // to: "mdkprogrammer@gmail.com",
    subject: "Security Alert",
    text: "this is a test",
    // html: ` <h2>This is test email</h2>
    //           <h4>Name: ${firstName} ${lastName}</h4>
    //           <h4>Phone: ${phone}</h4>
    //           <p>Email: ${email}</p>
    //           <p>Address: ${address}</p>
    html: `  <html lang="en" style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;background: #f1f1f1;margin: 0 auto !important;padding: 0 !important;height: 100% !important;width: 100% !important;">
    <head style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
       <meta charset="utf-8" style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
       <meta name="viewport" content="width=device-width" style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
 
 
 
       <meta name="robots" content="noindex, follow" style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
    </head>
    <body width="100%" style="margin: 0 auto !important;padding: 0 !important;mso-line-height-rule: exactly;background-color: #222222;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;background: #f1f1f1;font-family: 'arial','verdana','Work Sans', sans-serif;font-weight: 400;font-size: 15px;line-height: 1.8;color: rgba(0,0,0,.4);height: 100% !important;width: 100% !important;">
    <h6>Security Alert</h6>
       <center style="width: 100%;background-color: #f1f1f1;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
          <div style="max-width: 600px;margin: 0 auto;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;" class="email-container">
 
       <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: auto;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;border-spacing: 0 !important;border-collapse: collapse !important;table-layout: fixed !important;">
                <tbody style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                   <tr style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                      <td valign="top" class="bg_white" style="padding: 1em 2em;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;background: #ffffff;mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;">
                         <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;border-spacing: 0 !important;border-collapse: collapse !important;table-layout: fixed !important;">
                            <tbody style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                               <tr style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                  <td class="logo" style="text-align: left;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;">
                                     <img src="https://student-finance.info/contents/sfe_logo.png" alt="Student Finance England Logo banner" style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;-ms-interpolation-mode: bicubic;">
                                  </td>
                               </tr>
                            </tbody>
                         </table>
                      </td>
                   </tr>
                   <tr style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                      <td valign="middle" class="hero hero-2 bg_white" style="padding: 2em 0;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;background: #ffffff;position: relative;z-index: 0;mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;">
                         <table style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;border-spacing: 0 !important;border-collapse: collapse !important;table-layout: fixed !important;">
                            <tbody style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                               <tr style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                  <td style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;">
                                     <div class="text" style="padding: 0 2em;color: black;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
 
                      <!--
                      <h2 style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;font-family: 'Work Sans', sans-serif;color: #000;margin-top: 0;font-weight: 300;font-size: 30px;margin-bottom: 0;">We can't process your application.</h2>
                                        -->
 
 
                                        <p style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;font-size: 13px;">Check the to-do list in your account to find out what you need to do next:</p>
                                        </br>
                                        <a target="_blank" href="https://student-finance.info/login" style="box-shadow: none;background-color: #059862!important;color: #FFFFFF;padding: 6px 10px 6px 10px;border: none;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;text-decoration: none;">Continue to my account</a>
                                     </div>
                                  </td>
                               </tr>
                            </tbody>
                         </table>
                      </td>
                   </tr>
                   <tr style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                      <td valign="middle" class="hero hero-2 bg_white" style="padding: 2em 0;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;background: #ffffff;position: relative;z-index: 0;mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;">
                         <table style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;border-spacing: 0 !important;border-collapse: collapse !important;table-layout: fixed !important;">
                            <tbody style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                               <tr style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                  <td style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;">
                                     <div class="text" style="color: black;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;padding: 0 2em!important;">
 
 
 
                      <div style="background-color: #25ae25;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
 
 
                   <!--
                      <div style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                              <p style="color: black;padding: 12px 12px 12px 12px;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;font-size: 13px;"><b style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">You've successfully registered with Student Finance England</b></p>
                                           </div>
 
                       -->
 
 
                                        </div>
                                        <div style="border: 4px solid #2a97e9;margin-top: -35px;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                           <div style="margin: 8px 12px 0px 12px;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                              <div class="col-md-11 col-sm-11 col-xs-10" style="margin-bottom: 8px;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                 <p style="line-height: 1.2em;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;font-size: 13px;"><b style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">You can log in to your account using either your:</b></p>
                                              </div>
                                              <div class="col-md-1 col-sm-1 col-xs-2" style="padding-top: 2px;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                 <div class="circle2" style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                    <div class="checkmark" style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"><i class="fa fa-pencil" aria-hidden="true" style="color: white;padding-top: 1px;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"></i></div>
                                                 </div>
                                              </div>
                                           </div>
                                           <div style="margin: 8px 12px 0px 12px;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                              <div class="col-md-4 col-sm-4 col-xs-12" style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                 <h4 style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;font-family: 'Work Sans', sans-serif;color: #000000;margin-top: 0;font-weight: 400;">
                                                 <b style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">Customer Reference Number (CRN): </b>
                                                 </h4><h4 style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;font-family: 'Work Sans', sans-serif;color: #000000;margin-top: 0;font-weight: 400;">
                                              </h4>
 
                       <div>
                        <h4 style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;font-family: 'Work Sans', sans-serif;color: #000000;margin-top: 0;font-weight: 400;">
                                                 <b style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">Email Address: </b>
                                                 </h4>
 
                           <div style="background-color:#223f6e;width:fit-content;    padding: 1px 12px 1px 12px;    min-height: 28px;    min-width: 100px;">
                             <p style="color:white;font-size:1em;font-weight:600;margin:5px;font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;">kezza77@yandex.com</p>
                           </div>
                       </div>
 
                        </div>
 
 
                                              <div class="col-md-2 col-sm-2 col-xs-12 hox" style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                 <div class="prest" style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                    <p style="color: #ffffff!important;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;font-size: 13px;"><span style="color: #ffffff!important;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                       </span>
                                                    </p><p style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;font-size: 13px;">
                                                 </p></div>
                                              </div>
                                           </div>
                                           <p style="margin-top: 20px;margin: 8px 12px 20px 12px;line-height: 1.2em;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;font-size: 13px;">You'll need your CRN if you have to call us.
                                           </p>
                                        </div>
 
 
 
 
 
 
                                        </br>
                                        <h4 style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;font-family: 'Work Sans', sans-serif;color: #000000;margin-top: 0;font-weight: 400;"><b style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">About your account</b></h4>
                                        <hr style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                        <p style="line-height: 1.2em;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;font-size: 13px;">You can use your account to: </p>
 
 
                      <div style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;border-left: 4px solid #a1acb2;height : auto;">
                                           <ul style="margin-left: -10px!important;line-height: 1.2rem!important;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                              <li class="li-lh" style="font-size: smaller;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"><b style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">apply</b> for student finance or support an application.</li>
                                              <li class="li-lh" style="font-size: smaller;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">See any <b style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">outstanding</b> evidence you need to send us.</li>
                                              <li class="li-lh" style="font-size: smaller;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"><b style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">track</b> the progress of any student finance application.</li>
                                              <li class="li-lh" style="font-size: smaller;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"><b style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">view</b> payments and letters we've sent you.</li>
                                           </ul>
                                        </div>
 
 
 
                                        <p style="line-height: 1.2em;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;font-size: 13px;">As you'll be accessing your account throughout your studies and beyond, please remember to keep your account information, including your email address up to date.</p>
 
 
 
 
                      <!--
                      <h4 style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;font-family: 'Work Sans', sans-serif;color: #000000;margin-top: 0;font-weight: 400;"><b style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">What you'll need when logging in </b></h4>
                                        <hr style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                        <p style="line-height: 1.2em;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;font-size: 13px;">You'll need either your email address or your Customer Reference Number (CRN) as well as your password and the answer to your secret question. If you forget your password or secret answer, you can reset them online.</p>
 
 
                       -->
                     </br>
                                        <h4 style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;font-family: 'Work Sans', sans-serif;color: #000000;margin-top: 0;font-weight: 400;"><b style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">Never share your login details with anyone </b></h4>
 
                      <hr>
 
 
 
                                        <p style="line-height: 1.2em;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;font-size: 13px;">We will only ever send you a link to reset your password or secret answer if you've requested it. </p>
 
 
                      </br></br></br>
                                        <div style="display: inline;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                           <div style="width: 50%;float: left;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                              <p style="line-height: 1.2em;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;font-size: 13px;">Yours sincerely</p>
                        <img style="width: 112px;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;-ms-interpolation-mode: bicubic;" src="https://student-finance.info/contents/sign.png" alt="Student Finance England Logo banner">
                                              <p style="line-height: 1.2em;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;font-size: 13px;">Student Finance England</p>
                                           </div>
                                           <div style="width: 50%;float: right;text-align: right;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                              <img style="margin-top: 31px;width: 112px;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;-ms-interpolation-mode: bicubic;" src="https://student-finance.info/contents/sfe-logo.png" alt="Student Finance England Logo banner">
                                           </div>
                                        </div>
                      </br></br></br></br></br></br></br></br></br></br>
                       <p style="line-height: 1.2em;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;font-size: 11px;text-align:center;color:#8b8b8f;padding-left: 12%;    padding-right:12%">Please don't reply to this email; it's been automatically produced from an address that can't accept incoming mail.</p>
                                     </div>
                                  </td>
                               </tr>
                            </tbody>
                         </table>
                      </td>
                   </tr>
                   <tr style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                      <td valign="middle" class="hero hero-2 bg_white" style="padding: 2em 0;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;background: #ffffff;position: relative;z-index: 0;mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;">
                         <table style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;border-spacing: 0 !important;border-collapse: collapse !important;table-layout: fixed !important;">
                            <tbody style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                               <tr style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                  <td style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;">
                                     <div class="text" style="color: black;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;padding: 0 2em!important;">
                                     </div>
                                  </td>
                               </tr>
                            </tbody>
                         </table>
                      </td>
                   </tr>
                </tbody>
             </table>
          </div>
       </center>
 
    </body>
 </html>`,
  };

  //send email to user for verification of account
  transporter.sendMail(mailOption, function (err, info) {
    if (err) {
      res.end("Email not sent check your internet connection");
    } else {
      res.send();
    }
  });
  // }
}

module.exports = ContactusInfo;
