const express = require("express");
const routerUser = express.Router();
const { helloUser, pruebaHerni } = require("../controllers/users");

routerUser.get("/", helloUser);
routerUser.post("/prueba", pruebaHerni);

module.exports = routerUser;
