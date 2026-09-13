const express = require("express");
const userRouter = require("./routes/user.route");
const createStoreRouter = require("./routes/ceateStore.route");
const createFoodRouter = require("./routes/food.route");
const getAllFoodsRouter = require("./routes/getAllFoods.route");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);


app.use("/public/foods" , getAllFoodsRouter)
app.use("/auth/api/v1/user", userRouter);
app.use("/api/v2/store", createStoreRouter);
app.use("/api/v3/foods", createFoodRouter);

module.exports = app;
