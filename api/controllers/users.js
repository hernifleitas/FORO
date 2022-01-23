const { User } = require("../db");
const bcrypt = require("bcrypt");
const salt = 10;

const createUser = async (req, res) => {
  try {
    const { email, username, password } = req.body;
    const pswHash = await bcrypt.hash(password, salt);

    const [user, created] = await User.findOrCreate({
      where: { email },
      defaults: { username, password: pswHash },
      attributes: { exclude: ["password"] },
    });

    if (created) {
      res.json({ msj: "User created successfully!" });
    } else {
      res.json({ msj: "There is already a user with that email!", ...user });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createUser };

// te muestro, igual en el chat quedo
// primero trabajas en el codigo como estoy haciendo ahora .
// despues
// git add .
// eso sirve para agregar todos los cambios mañana te lo explico mejor
// despues
// git commit -m "estuve enseñandole a herni git"
// mensaje de lo que haces y por ultimo
// git push origin laramaque creas
// ahi te muestro todo y esto se sube al git
// ahora voy a git y pongo los cambios
// elimino la rama
// y hago el pull
