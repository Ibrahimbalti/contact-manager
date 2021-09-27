const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoUrl');

const connectDB = () => {
  mongoose
    .connect(db)
    .then(() => console.log('connect to Mongodb'))
    .catch((error) => {
      console.log(error.message);
      process.exit(1);
    });
};

module.exports = connectDB;
