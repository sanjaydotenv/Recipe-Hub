const express = require("express");
const userRouter = require("./routes/user.route");
const createStoreRouter = require("./routes/ceateStore.route");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/auth/api/v1/user", userRouter);
app.use("/api/v2/store" , createStoreRouter);

module.exports = app;
