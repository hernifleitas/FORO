const express = require("express");
const routerUser = express.Router();
const { createUser } = require("../controllers/users");

routerUser.post("/create", createUser);

module.exports = routerUser;
