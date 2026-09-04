const express = require("express");

const route = express.Router();

// import controllers

const userController = require("../controllers/user.controller");

route.post("/register" , userController.userRegisterController)

module.exports = route;
