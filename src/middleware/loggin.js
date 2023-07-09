async function loggin(req, res, next) {
  console.log("Log registrado no sistema");
  next();
}

module.exports = { loggin };
