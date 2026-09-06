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

module.exports = { createStoreController };
