const express = require("express");
const routerPost = express.Router();
const { createPost } = require("../controllers/post");

routerPost.post("/create", createPost);

module.exports = routerPost;
