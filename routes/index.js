const { Router } = require("express");
const router = Router();

//Rutas Get
router.get("/", (req, res) => {
  console.log("Alguien ha accedido al servidor ");
  res.send("Bienvenido al servidor ");
});

router.get("/rutaGet", (req, res) => {
  console.log("Alguien ha accedido a la ruta get ");
  res.send("hola haciendo pruebas con la ruta get ");
});
router.get("/rutaGetJSON", (req, res) => {
  console.log("Alguien ha accedido a la ruta get con un JSON ");
  res.send("hola haciendo pruebas con la ruta getJSON ");
});

router.post("/rutaPOST", (req, res) => {
  console.log("Alguien ha accededido a la ruta POST");
  res.send("hola haciendo pruebas POST");
});

router.post("/rutaPOSTconBody", (req, res) => {
  console.log(req.body);
  res.send("Info recibida");
});

module.exports = router;

//   res.json({
//     id: "cliente_01",
//     nombre: req.body.nombre,
//     apellido1: req.body.apellido1,
//     apellido2: req.body.apellido2,
//     edad: req.body.edad,
//     correo: req.body.correo,
//     telefono: req.body.telf,
//   });

// res.send("Gracias por rellenar el formulario :) ");
// res.redirect("http://127.0.0.1:5500/index.html");
