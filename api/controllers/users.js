const helloUser = (request, response) => {
  response.json({ msj: "Hello world" });
};

module.exports = { helloUser };
