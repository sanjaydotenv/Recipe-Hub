const mongoose = require("mongoose");

const URI = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(`${URI}Recipe-Hub`);
    console.log("Database Conecting Successfully");
  } catch (error) {
    console.log(`error while connecting DB ${error}`);
  }
};

module.exports = connectDB;
