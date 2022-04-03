var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "priyasethu9@gmail.com",
    pass: "Bama@123*!",
  },
});

var mailOptions = {
  from: "priyasethu9@gmail.com",
  to: "shuns007@gmail.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
  // html: '<h1>Welcome</h1><p>That was easy!</p>'
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
