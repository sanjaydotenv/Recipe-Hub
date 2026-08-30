const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  foodTitle: {
    type: String,
    required: [true, "Food title is required"],
  },
  foodDescription: {
    type: String,
    required: [true, "Description is required"],
  },
  foodPrice: {
    type: Number,
    required: [true, "Price is required"],
  },
  foodImage: {
    type: String,
    // required: [true, "Image is required"],
  },
  foodRating: {
    type: Number,
    default: 0,
  },
});

const foodModel = mongoose.model("foods", foodSchema);

module.exports = foodModel;
