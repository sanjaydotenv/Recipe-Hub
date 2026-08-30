const express = require("express");
const route = require("./routes/food.route");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/recipe", route);

module.exports = app;
