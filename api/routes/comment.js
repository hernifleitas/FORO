const express = require("express");
const { commentPost } = require("../controllers/comment");

const routerComment = express.Router();

routerComment.post("/", commentPost);

module.exports = routerComment;
