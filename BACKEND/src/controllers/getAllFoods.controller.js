const foodModel = require("../models/food.model");

const getAllFoodsController = async (req, res) => {
  const foods = await foodModel.find();

  res.status(200).json({
    message: "All foods fetched successfully",
    allFoods: foods,
  });
};

const getOneFood = async (req, res) => {
  const { foodID } = req.params;

  if (!foodID) {
    return res.status(400).json({
      message: "food Id is required",
    });
  }

  const data = await foodModel.findById(foodID);

  if (!data) {
    return res.status(500).json({
      message: "internal server error",
    });
  }

  return res.status(200).json({
    message: "food fetched",
    data: {
      food: data,
    },
  });
};

module.exports = { getAllFoodsController, getOneFood };
