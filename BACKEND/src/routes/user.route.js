const express = require("express");

const route = express.Router();

// import controllers

const userController = require("../controllers/user.controller");

// require middleware

const authMiddleware = require("../middlewares/auth.middleware");

route.post("/register", userController.userRegisterController);
route.post("/login", userController.userLoginController);
route.get("/profile" , authMiddleware.authentication , userController.userProfileController)

module.exports = route;
