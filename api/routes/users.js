const express = require("express");
const routerUser = express.Router();
const { helloUser } = require("../controllers/users");

routerUser.get("/", helloUser);

module.exports = routerUser;
