const foodModel = require("../models/food.model");

const createFoodController = async (req, res) => {
  const { foodTitle, foodDescription, foodImage, foodPrice, foodRating } =
    req.body;

  if (!foodTitle || !foodDescription /*|| !foodImage*/ || !foodPrice) {
    return res.status(400).json({
      message: "Something was missing. fill all the fields",
    });
  }

  const CreatedFood = await foodModel.create({
    foodTitle,
    foodDescription,
    foodImage,
    foodPrice,
  });

  if (!CreatedFood) {
    return res.status(400).json({
      message: "food is missing",
    });
  }

  res.status(201).json({
    message: "FoodCreated Successfully",
    Food: CreatedFood,
  });
};



module.exports = { createFoodController };
