const mongoose = require("mongoose");

const storeSchema = new mongoose.Schema({
  storeName: {
    type: String,
    required: true,
  },
  category: {
    type: [String],
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const storeModel = mongoose.model("store", storeSchema);

module.exports = storeModel;
