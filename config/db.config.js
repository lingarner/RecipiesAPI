const dotenv = require('dotenv');
dotenv.config('../.env');

module.exports = {
  url: process.env.MONGODB_URI,
};