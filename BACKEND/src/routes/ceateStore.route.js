const express = require("express");

const route = express.Router();

// require middlewares

const authMiddleware = require("../middlewares/auth.middleware");

// require controllers

const storeController = require("../controllers/createStore.controller");

route.post(
  "/create",
  authMiddleware.authentication,
  storeController.createStoreController,
);

module.exports = route;
