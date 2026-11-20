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

route.get(
  "/getAllStores",
  authMiddleware.authorizeOwner,
  storeController.getAllStoresController,
);

route.get(
  "/getAllUsers",
  authMiddleware.authorizeOwner,
  storeController.getAllUsersController,
);

module.exports = route;
