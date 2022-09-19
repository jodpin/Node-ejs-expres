const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.7rdg5ca.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority?directConnection=true`
mongoose.connect(uri).then(console.log("base de datos conectada"))

app.use('/', require('./router/RutasWeb.js'));
app.use('/mascotas', require('./router/Mascotas'));


// Motor de plantilla
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");



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

