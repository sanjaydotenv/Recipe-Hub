const foodModel = require("../models/food.model");
const uploadImage = require("../services/imageKitInstance");
const storeModel = require("../models/store.model");

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
      storeID: req.userProfile.storeID,
    });

    const store = await storeModel.findById(newFood.storeID);

    return res.status(201).json({
      message: "New Food added successfully",
      data: {
        newFood: {
          newFood,
        },
        store: {
          store,
        },
      },
    });
  } catch (error) {
    console.error("Error creating food:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const updateFoodController = async (req, res) => {
  const { foodID } = req.params;

  if (!foodID) {
    return res.status(400).json({ message: "Food ID is required" });
  }

  const storeID = req.userProfile.storeID;

  const food = await foodModel.findOne({
    _id: foodID,
    storeID,
  });

  if (!food) {
    return res.status(404).json({ message: "Food not found" });
  }

  // Update the food item with the new data
  const { foodTitle, foodDescription, foodPrice } = req.body;

  const foodImage = req.file;

  if (foodTitle) {
    food.foodTitle = foodTitle;
  }
  if (foodDescription) {
    food.foodDescription = foodDescription;
  }
  if (foodPrice) {
    food.foodPrice = foodPrice;
  }

  if (foodImage) {
    const foodImageResult = await uploadImage(
      foodImage.buffer,
      foodImage.originalname,
    );

    if (!foodImageResult) {
      return res.status(500).json({
        message: "Failed to upload food image",
      });
    }

    food.foodImage = foodImageResult.url;
  }

  await food.save();

  return res
    .status(200)
    .json({ message: "Food updated successfully", data: { food } });
};

const deleteFoodController = async (req, res) => {
  try {
    const { foodID } = req.params;

    if (!foodID) {
      return res.status(400).json({
        message: "Food ID is required",
      });
    }

    const storeID = req.userProfile.storeID;

    const deletedFood = await foodModel.findOneAndDelete({
      _id: foodID,
      storeID: storeID,
    });

    if (!deletedFood) {
      return res.status(404).json({
        message: "Food not found or you are not authorized",
      });
    }

    return res.status(200).json({
      message: "Food deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting food:", error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

const getAllFoodsController = async (req, res) => {
  try {
    const storeID = req.userProfile.storeID;

    const foods = await foodModel.find({
      storeID,
    });

    return res.status(200).json({
      message: "Foods fetched successfully",
      data: {
        foods,
      },
    });
  } catch (error) {
    console.error("Error fetching foods:", error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

module.exports = {
  createFoodController,
  updateFoodController,
  deleteFoodController,
  getAllFoodsController,
};
