const express = require("express");


const app = express();



const port = 3000;

app.get("/", (req, res)=>{
    
    res.send("mi respuesta desde express")
})

// le decimos a express que vamos a tener una
// carpeta estaticas public.
// __dirname hace referencia a la direccion de mi computadora donde se encuentra 
// el proyecto

// MIDDLEWARE VAN ANTES DE LAS RUTAS
app.use(express.static(__dirname + "/public"));



app.get("/servicios", (req, res)=>{
    res.send("bienvenidos a mi pagina de servicios")
})

// debe ir al final de las rutas
app.use((req, res, next)=>{
    res.status(404).sendFile(__dirname + "/public/404.html")
}
)
app.listen(port, ()=>{
    console.log("servidor escuchando en el puerto "+ port);
})

