const express = require("express");

const app = express();

const port = 3000;

// Motor de plantilla
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.get("/", (req, res)=>{
    
    res.render("index",{titulo: "mi titulo dinamico"})

})

app.get("/servicios", (req, res)=>{
    res.render("servicios", {tituloServicios: "titulo de dinamico servicios"})
})

app.use((req, res, next)=>{
    res.status(404).render("404",{
        titulo: "direccion no encontrada",
        descripcion: " error 404"
    });
})


app.listen(port, ()=>{
    console.log("servidor escuchando en el puerto "+ port);
})

