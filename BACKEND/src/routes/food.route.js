const express = require("express");

// Require foodController
const foodController = require("../controllers/food.controller");

const route = express.Router();

// multer
const upload = require("../multer");

// use foodController
route.post("/add-food", upload.single("foodImage"), foodController.createFoodController);

// export route
module.exports = route;
