const express = require("express");

const route = express.Router();

// require muddlewares

const authMiddleware = require("../middlewares/auth.middleware");
const upload = require("../middlewares/multer.middleware");

// require controllers

const foodController = require("../controllers/food.controller");

route.post(
  "/add-food",
  authMiddleware.authorization,
  upload.single("foodImage"),
  foodController.createFoodController,
);

route.put(
  "/update-food/:foodID",
  authMiddleware.authorization,
  upload.single("foodImage"),
  foodController.updateFoodController,
);

route.delete(
  "/delete-food/:foodID",
  authMiddleware.authorization,
  foodController.deleteFoodController,
);

route.get(
  "/get-all-foods",
  authMiddleware.authorization,
  foodController.getAllFoodsController
);

module.exports = route;
