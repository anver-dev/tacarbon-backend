const express = require("express");
const morgan = require("morgan");
//Initializations

import inventario from "./routes/inventario";

import empleados from "./routes/empleados";

import puntoDeVenta from "./routes/puntoDeVenta";

const app = express();

//settings configuracion del server

app.set("port", process.env.PORT || 4000);

//Middlewares se ejecuta cada vez que un cliente envia una peticion al servidor
app.use(morgan("dev"));
//app.use(json());

//Variables globales

// Routes
app.use("/api/inventario", inventario);
app.use("/api/empleados", empleados);
app.use("/api/punto-de-venta", puntoDeVenta);

//public codigo que el navegador pueda acceder

//starting server
app.listen(app.get("port"), () => {
  console.log("Server escuchando por el puerto: ", app.get("port"));
});
