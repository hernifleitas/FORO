const express = require("express");
const logger = require("morgan");
const dotenv = require("dotenv");
dotenv.config();
let cors = require("cors");

const app = express();

//midlewares
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
const routerUser = require("./routes/users");

app.use("/user", routerUser);

module.exports = app;
