const imagekit = require("imagekit");

const imageKitInstance = new imagekit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});

const uploadImage = async (file, fileName) => {
  const obj = {
    file,
    fileName,
    folder: "Recipe Hub",
  };

  return imageKitInstance.upload(obj);
};

module.exports = uploadImage;
