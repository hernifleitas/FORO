const { Post } = require("../db");

const createPost = async (req, res) => {
  const { head, idUser, section } = req.body;

  try {
    const post = await Post.create({ head, section });

    await post.setUser(idUser);
    res.json(post);
  } catch (error) {
    console.log(error);
  }
};
module.exports = { createPost };
