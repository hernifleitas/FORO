const helloUser = (request, response) => {
  response.json({ msj: "Hello world" });
};

const pruebaHerni = (req, res) => {
  // aca request y response se abrevia para hacerlo mas rapido
  const { nombre } = req.body;
  //voy a cambiarlo
  const mensaje = `Mi nombre es ${nombre}`;
  //esto es ES6
  res.json({ mensaje });
};

module.exports = { helloUser, pruebaHerni };

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
