const express = require("express");
const route = require("./routes/user.route");



const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/auth/api/v1/user", route);

module.exports = app;
