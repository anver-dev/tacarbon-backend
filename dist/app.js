"use strict";

var _inventario = _interopRequireDefault(require("./routes/inventario"));

var _empleados = _interopRequireDefault(require("./routes/empleados"));

var _puntoDeVenta = _interopRequireDefault(require("./routes/puntoDeVenta"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var express = require("express");

var morgan = require("morgan"); //Initializations


var app = express(); //settings configuracion del server

app.set("port", process.env.PORT || 4000); //Middlewares se ejecuta cada vez que un cliente envia una peticion al servidor

app.use(morgan("dev")); //app.use(json());
//Variables globales
// Routes

app.use("/api/inventario", _inventario["default"]);
app.use("/api/empleados", _empleados["default"]);
app.use("/api/punto-de-venta", _puntoDeVenta["default"]); //public codigo que el navegador pueda acceder
//starting server

app.listen(app.get("port"), function () {
  console.log("Server escuchando por el puerto: ", app.get("port"));
});