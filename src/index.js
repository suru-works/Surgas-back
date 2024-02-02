const express = require("express");
const app = express();

const baseURL = require("../config/baseURL.js");
const models = require("./models/models");
const services = require("./services");
const controllers = require("./controllers");

app.use(express.json());

app.use(services.auth.middleware);

app.use(controllers.routes);

app.listen(baseURL.appPort, () => {
  console.log("El servidor está escuchando en el puerto 3000");
});
