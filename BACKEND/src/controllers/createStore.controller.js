const storeModel = require("../models/store.model");
const userModel = require("../models/user.model");

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

const getAllUsersController = async (req, res) => {
  const allUsers = await userModel.aggregate([
    {
      $match: {
        $or: [
          {
            role: "user",
          },
          {
            role: "seller",
          },
        ],
      },
    },
    {
      $lookup: {
        from: "stores",
        localField: "storeID",
        foreignField: "_id",
        as: "storeData",
        pipeline: [
          {
            $project: {
              storeName: 1,
              _id: 0,
            },
          },
        ],
      },
    },
    {
      $unwind: {
        path: "$storeData",
        preserveNullAndEmptyArrays: true,
      },
    },
  ]);

  res.status(200).json({
    message: "All Users Fetched Successfully",
    data: {
      users: {
        allUsers,
      },
    },
  });
};

module.exports = {
  createStoreController,
  getAllStoresController,
  getAllUsersController,
};
