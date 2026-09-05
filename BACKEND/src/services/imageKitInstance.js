const imagekit = require("imagekit");

const imageKitInstance = new imagekit({
  urlEndpoint: process.env.IMAGEKIT_ENDPOINT,
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

const uploadImage = async (file, fileName) => {
  const obj = {
    file,
    fileName,
    folder: "Recipe_Hub",
  };

  return await imageKitInstance.upload(obj);
};

module.exports = uploadImage;
