const {
  Verification_Email_Template,
  Welcome_Email_Template,
} = require("../EmailTemplate");
const transporter = require("./config");

const sendVerificationCode = async (email, verificationCode) => {
  try {
    const response = await transporter.sendMail({
      from: '"MORENT"', // sender address
      to: email, // list of receivers
      subject: "Verify your Email", // Subject line
      text: "Verify your Email", // plain text body
      html: Verification_Email_Template.replace(
        "{verificationCode}",
        verificationCode
      ), // html body
    });
    console.log("Email Sent Successfully", response);
  } catch (err) {
    console.log(err);
  }
};

const welcomeCode = async (email, name) => {
  try {
    const response = await transporter.sendMail({
      from: '"MORENT', // sender address
      to: email, // list of receivers
      subject: "Verify your Email", // Subject line
      text: "Verify your Email", // plain text body
      html: Welcome_Email_Template.replace("{name}", name), // html body
    });
    console.log("Email Sent Successfully", response);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { sendVerificationCode, welcomeCode };
