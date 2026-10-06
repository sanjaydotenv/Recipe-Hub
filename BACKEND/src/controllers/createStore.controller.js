const storeModel = require("../models/store.model");

const createStoreController = async (req, res) => {
  const { storeName, category } = req.body;

  const userProfile = req.userProfile;

  if (!storeName || !category) {
    return res.status(401).json({
      message: "all fields are required.",
    });
  }

  const createdStore = await storeModel.create({
    storeName,
    category,
    owner: userProfile._id,
  });

  userProfile.role = "seller";

  userProfile.storeID = createdStore._id;

  await userProfile.save();

  await createdStore.populate("owner");

  res.status(201).json({
    message: "store created successfully.",
    store: createdStore,
  });
};

const getAllStoresController = async (req, res) => {
  const allStores = await storeModel.find().populate("owner");

  res.status(200).json({
    message: "All Stores Fetched Successfully",
    data: {
      store: {
        allStores,
      },
    },
  });
};

module.exports = { createStoreController, getAllStoresController };
