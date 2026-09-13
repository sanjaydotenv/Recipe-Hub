const express = require("express");
const route = express.Router();

const {
  getAllFoodsController,
} = require("../controllers/getAllFoods.controller");

route.get("/get-all-foods", getAllFoodsController);

module.exports = route;
