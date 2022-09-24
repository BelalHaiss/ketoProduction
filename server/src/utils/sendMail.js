const nodemailer = require('nodemailer');
const handlebars = require('handlebars');
const fs = require('fs');
const path = require('path');

const resetPath = path.join(__dirname, 'requestResetPassword.handlebars');
const successUpdatePath = path.join(__dirname, 'passwordUpdated.handlebars');

const sendEmail = async (email, subject, payload, senario) => {
  try {
    const source = fs.readFileSync(
      senario === 'reset' ? resetPath : successUpdatePath,
      'utf8'
    );

    const compiledTemplate = handlebars.compile(source);

    // create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      host: 'smtp.office365.com',
      secureConnection: true,
      port: 587,
      auth: {
        user: 'support@ketonestyle.com',
        pass: 'KetoStyle$$'
      }
    });
    const htmlTemplate = compiledTemplate(payload);

    const options = () => {
      return {
        from: `${
          senario === 'reset' ? ' Password reset ' : 'Password changed'
        } <support@ketonestyle.com> `,
        to: email,
        subject: subject,
        html: htmlTemplate
      };
    };
    // Send email
    await transporter.sendMail(options());
  } catch (error) {
    console.log(error, 'mail error');
    throw new Error('حدث خطا برجاء المحاولة لاحقا');
  }
};

module.exports = sendEmail;
