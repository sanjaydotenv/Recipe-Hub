const mongoose = require("mongoose");

const foodSchema = mongoose.Schema({
  foodTitle: {
    type: String,
    require: true,
    minLength: 3,
    maxLength: 20,
  },
  foodPrice: {
    type: Number,
    required: true,
  },
  foodDescription: {
    type: String,
    required: true,
    minLength: 10,
    maxLength: 100,
  },
  foodImage: {
    type: String,
    required: true,
  },
  storeID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "store",
    required: true,
  },
});

const foodModel = mongoose.model("Foods", foodSchema);

module.exports = foodModel;
