const express = require("express");
const route = express.Router();

const {
  getAllFoodsController,
  getOneFood,
} = require("../controllers/getAllFoods.controller");

route.get("/get-all-foods", getAllFoodsController);

route.post("/foodOne/:foodID", getOneFood);

module.exports = route;
