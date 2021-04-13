const mongoose = require("mongoose");
const keys = require("./keys");

const db = require('db')
db.connect({
  mongoURI: process.env.DB_URI
})
// Replace this with your MONGOURI.
const MONGOURI = mongoURI;

const InitiateMongoServer = async () => {
  try {
    await mongoose.connect(MONGOURI, {
      useNewUrlParser: true
    });
    console.log("Connected to DB !!");
  } catch (e) {
    console.log(e);
    throw e;
  }
};

module.exports = InitiateMongoServer;
