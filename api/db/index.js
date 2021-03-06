const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
const { Sequelize, Op } = require("sequelize");

//importamos los modelos
const modelUser = require("../models/User");
const modelPost = require("../models/publication");
const modelComment = require("../models/comment");

/* eslint-disable */
const sequelize =
  process.env.NODE_ENV === "production"
    ? new Sequelize({
        database: DB_NAME,
        dialect: "postgres",
        host: DB_HOST,
        port: 5432,
        username: DB_USER,
        password: DB_PASSWORD,
        pool: {
          max: 3,
          min: 1,
          idle: 10000,
        },
        dialectOptions: {
          ssl: {
            require: true,
            // Ref.: https://github.com/brianc/node-postgres/issues/2009
            rejectUnauthorized: false,
          },
          keepAlive: true,
        },
        ssl: true,
      })
    : new Sequelize(
        `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
        {
          logging: false, // set to console.log to see the raw SQL queries
          native: false, // lets Sequelize know we can use pg-native for ~30% more speed
        }
      );

// Injectamos la conexion (sequelize) a todos los modelos
modelUser(sequelize);
modelPost(sequelize);
modelComment(sequelize);

//crean las varaibles con los modelos
const { User, Post, Comment } = sequelize.models;
// se crean las relaciones de los modelos
User.hasMany(Post, { foreignKey: "id_user_post" });
Post.belongsTo(User, { foreignKey: "id_user_post" });

User.hasMany(Comment, { foreignKey: "id_user_comment" });
Comment.belongsTo(User, { foreignKey: "id_user_comment" });

Post.hasMany(Comment, { foreignKey: "id_post_comment" });
Comment.belongsTo(Post, { foreignKey: "id_post_comment" });
// se exporta los modelos
module.exports = {
  ...sequelize.models,
  sequelize,
  Op,
};
