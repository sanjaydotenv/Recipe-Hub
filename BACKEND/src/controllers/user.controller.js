const userModel = require("../models/user.model");
const bcrypt = require("bcryptjs");

const userRegisterController = async (req, res) => {
  const { fullName, email, password, phone } = req.body;

  if (!fullName || !email || !password || !phone) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Perform user registration logic here (e.g., save to database)

  const hashedPassword = await bcrypt.hash(password, 10);

  const registeredUser = await userModel.create({
    fullName,
    email,
    password: hashedPassword,
    phone,
  });

  // token logic can be added here later

  res
    .status(201)
    .json({ message: "User registered successfully", user: registeredUser });
};

module.exports = {
  userRegisterController,
};
