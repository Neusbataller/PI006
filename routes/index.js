const { Router } = require("express");
const router = Router();

//Rutas Get
router.get("/rutaGet", (req, res) => {
  console.log("Alguien ha accedido al servidor ");
  res.send("Bienvenido al servidor ");
});

router.post("/rutaPOST", (req, res) => {
  console.log("Enviada una peticion POST");
  console.log(req.body);

  res.json({
    id: "cliente_01",
    nombre: req.body.nombre,
    apellido1: req.body.apellido1,
    apellido2: req.body.apellido2,
    edad: req.body.edad,
    correo: req.body.correo,
    telefono: req.body.telf,
  });

  // res.send("Gracias por rellenar el formulario :) ");
  // res.redirect("http://127.0.0.1:5500/index.html");
});

module.exports = router;
