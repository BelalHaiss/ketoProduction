const nodemailer = require('nodemailer');
const handlebars = require('handlebars');
const fs = require('fs');
const path = require('path');

const resetPath = path.join(__dirname, 'requestResetPassword.handlebars');
const successUpdatePath = path.join(__dirname, 'passwordUpdated.handlebars');

const sendEmail = async (email, subject, payload, senario) => {
  const source = fs.readFileSync(
    senario === 'reset' ? resetPath : successUpdatePath,
    'utf8'
  );

  const compiledTemplate = handlebars.compile(source);

  try {
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
    transporter.sendMail(options(), (error, info) => {
      console.log(info, 'info');
      if (error) {
        return res.status(404).json({
          custom: 'حدث خطا برجاء المحاولة لاحقا'
        });
      } else {
        return res.status(200).json({
          success: true
        });
      }
    });
  } catch (error) {
    return res.status(404).json({
      custom: 'حدث خطا برجاء المحاولة لاحقا'
    });
  }
};

module.exports = sendEmail;
