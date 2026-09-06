const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email address"],
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
    minLength: 10,
    maxLength: 10,
  },
  role: {
    type: String,
    enum: ["user", "seller"],
    default: "user",
  },
  storeID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "store",
  }
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
