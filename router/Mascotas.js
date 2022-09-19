const express = require("express");
const router = express.Router();

const Mascota = require('../models/mascota')

router.get("/", async (req, res) => {
    try {
      const arrayMascotas = await Mascota.find();
      console.log(arrayMascotas);
      res.render("mascotas", {
        arrayMascotas
      });
    } catch (error) {
      console.log(error);
    }
  });

  router.get("/crear", async (req, res) => {
    res.render("crear");
  });

  router.post("/", async (req, res) => {
    const body = req.body;
    try {
      // opcion 1
      // const mascotaDb = new Mascota(body);
      // await mascotaDb.save();
  
      // opcion 2
      await Mascota.create(body);
  
      res.redirect("/mascotas");
    } catch (error) {
      console.log(error);
    }
  });

  router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const mascotaDb = await Mascota.findOne({ _id: id });
    res.render("detalle", {
      mascota: mascotaDb,
      error: false,
    });
  } catch (error) {
    console.log(error);
    res.render("detalle", {
      error: true,
      mensaje: "no se encuentra el elemento seleccionado",
    });
  }
});

router.delete("/:id", async (req, res)=>{
  const id = req.params.id;

  try {
      const mascotaDb = await Mascota.deleteOne({_id: id});
      if(mascotaDb){
          res.json({
              estado:true,
              mensaje: "eliminado!"
          })
      }else{
          res.json({
              estado:false,
              mensaje: "fallo al eliminar!"
          })
      }
  } catch (error) {
      console.log(error)
  }
})

module.exports = router;
