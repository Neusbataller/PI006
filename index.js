const express = require("express");
const app = express();
const morgan = require("morgan");

//Settings
app.set("port", process.env.PORT || 8080);

//Middleware
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Rutas
app.use("/", require("./routes/index"));

//Iniciando el servidor
app.listen(app.get("port"), () => {
  console.log("hola desde el puerto: " + app.get("port"));
});
