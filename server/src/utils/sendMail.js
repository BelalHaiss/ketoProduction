const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const handlebars = require('handlebars');
const fs = require('fs');
const path = require('path');

const CLIENT_ID =
  '321121808221-3nr9ud8n4oiugdod9tcgrdgpg1eo8boo.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URL = 'https://developers.google.com/oauthplayground';

const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URL
);

oauth2Client.generateAuthUrl({
  access_type: 'offline',
  scope: 'https://mail.google.com/'
});

const resetPath = path.join(__dirname, 'requestResetPassword.handlebars');
const successUpdatePath = path.join(__dirname, 'passwordUpdated.handlebars');

const REFRESH_TOKEN =
  '1//048YFIj3cokXBCgYIARAAGAQSNwF-L9Ir5W_gI3LqaytCnqh2YgtMYKYcuIFPusvygZgDJDKEXb2unx8YLmrHuM931NTZd8W7OBk';
const sendEmail = async (email, subject, payload, senario) => {
  const source = fs.readFileSync(
    senario === 'reset' ? resetPath : successUpdatePath,
    'utf8'
  );

  const compiledTemplate = handlebars.compile(source);

  try {
    oauth2Client.setCredentials({
      refresh_token: REFRESH_TOKEN
    });
    const accessToken = oauth2Client.getAccessToken();
    // create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      service: 'gmail',

      auth: {
        type: 'OAuth2',
        user: 'ketostylear@gmail.com',
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken
      }
    });
    const htmlTemplate = compiledTemplate(payload);

    const options = () => {
      return {
        from: `${
          senario === 'reset' ? ' Password reset ' : 'Password changed'
        } <ketostyleAR@gmail.com> `,
        to: email,
        subject: subject,
        html: htmlTemplate
      };
    };

    // Send email
    transporter.sendMail(options(), (error, info) => {
      if (error) {
        console.log(error);
        return error;
      } else {
        return res.status(200).json({
          success: true
        });
      }
    });
  } catch (error) {
    return error;
  }
};

module.exports = sendEmail;
