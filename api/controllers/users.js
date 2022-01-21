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
