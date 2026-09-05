const foodModel = require("../models/food.model");
const uploadImage = require("../services/imageKitInstance");

const createFoodController = async (req, res) => {
  try {
    const { foodTitle, foodDescription, foodPrice } = req.body;

    const foodImage = req.file;

    if (!foodTitle || !foodDescription || !foodPrice) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (!foodImage) {
      return res.status(400).json({
        message: "Food image is required",
      });
    }

    const foodImageResult = await uploadImage(
      foodImage.buffer,
      foodImage.originalname,
    );

    if (!foodImageResult) {
      return res.status(500).json({ message: "Failed to upload food image" });
    }

    const newFood = await foodModel.create({
      foodTitle,
      foodDescription,
      foodPrice,
      foodImage: foodImageResult.url,
      storeID: req.userProfile._id,
    });

    return res.status(201).json({
      message: "New Food added successfully",
      data: newFood,
    });
  } catch (error) {
    console.error("Error creating food:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { createFoodController };
