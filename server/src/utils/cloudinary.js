const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'ketoar',
  api_key: '735877762536685',
  api_secret: 'dYyrh0Ty6ZlUPg4QcsYq7ePRF7M',
  secure: true
});

module.exports = cloudinary;
