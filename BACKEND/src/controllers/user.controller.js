const userModel = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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

  const token = jwt.sign(
    {
      id: registeredUser._id,
    },
    process.env.JWT_SECRET,
  );

  res
    .status(201)
    .json(
      { message: "User registered successfully", user: registeredUser },
      token,
    );
};

const userLoginController = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "fill all the fields.",
    });
  }

  const isUserExists = await userModel.findOne({ email });

  if (!isUserExists) {
    return res.status(401).json({
      messahe: "User not found.",
    });
  }

  const isPasswordValid = await bcrypt.compare(password, isUserExists.password);
  if (!isPasswordValid) {
    return res.status(400).json({
      messahe: "password is invalid",
    });
  }

  const token = jwt.sign(
    {
      id: isUserExists._id,
    },
    process.env.JWT_SECRET,
  );

  res.status(200).json({
    message: "logged in successfully",
    data: {
      user: {
        fullName: isUserExists.fullName,
        email: isUserExists.email,
      },
    },
    token,
  });
};

const userProfileController = async (req, res) => {
  const profile = req.userProfile;

  res.status(200).json({
    message: "User fetched suuccessfully",
    data: {
      user: {
        fullName: profile.fullName,
        email: profile.email,
        phone: profile.phone,
        role: profile.role,
      },
    },
  });
  
};

module.exports = {
  userRegisterController,
  userLoginController,
  userProfileController,
};
