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
  console.log(req.body.nombre);
  console.log(req.body.apellido1);
  console.log(req.body.apellido2);
  console.log(req.body.edad);
  console.log(req.body.correo);
  console.log(req.body.telf);

  res.json({
    id: "cliente_01",
    nombre: req.body.nombre,
    apellido: req.body.apellido,
  });

  // res.send("Gracias por rellenar el formulario :) ");
  // res.redirect("http://127.0.0.1:5500/index.html");
});

module.exports = router;
