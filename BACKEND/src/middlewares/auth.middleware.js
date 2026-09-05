const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");

const authentication = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      res.status(401).json({
        message: "unauthorized request.",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      res.status(401).json({
        message: "invalid token.",
      });
    }

    const user = await userModel.findById(decoded.id);

    if (!user) {
      return res.status(400).json({
        message: "user not found.",
      });
    }

    req.userProfile = user;

    next();
  } catch (error) {
    return res.status(401).json({
      message: "invalid or expired token.",
    });
  }
};

const authorization = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    res.status(401).json({
      message: "unauthorized request.",
    });
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  if (!decoded) {
    res.status(401).json({
      message: "invalid token.",
    });
  }

  const user = await userModel.findById(decoded.id);

  if (user.role !== "seller") {
    return res.status(403).json({
      message: "forbidden access.",
    });
  }

  req.userProfile = user;

  next();
};

module.exports = { authentication, authorization };
