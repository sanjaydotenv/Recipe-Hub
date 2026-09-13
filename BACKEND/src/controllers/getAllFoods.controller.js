const foodModel = require("../models/food.model");

const getAllFoodsController = async (req, res) => {
  const foods = await foodModel.find();

  res.status(200).json({
    message: "All foods fetched successfully",
    allFoods: foods,
  });
};

module.exports = { getAllFoodsController };
