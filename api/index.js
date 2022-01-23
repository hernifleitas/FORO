const app = require("./app");
//importamos sequelize
const { sequelize } = require("./db");

const { PORT } = process.env;

sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`listen in port ${PORT}`);
  });
});
