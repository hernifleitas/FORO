const { Comment, Post } = require("../db");

const commentPost = async (req, res) => {
  const { idPost, idUser, head } = req.body;
  try {
    const createComment = await Comment.create({ head });
    await createComment.setPost(idPost);
    await createComment.setUser(idUser);

    const post = await Post.findByPk(idPost, {
      include: [{ model: Comment }],
    });

    res.json({ ...post, ...createComment });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { commentPost };
