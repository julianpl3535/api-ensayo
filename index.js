const { conexion } = require("./database/conexion");
const express = require("express");
const cors = require("cors");

console.log("Hola sapo perro");

conexion();

const app = express();
const puerto = 9700;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/ruta1", (req, res)=>{
    console.log("mensaje desde ruta1");

    return res.status(200).send({
        autor:"julian",
        edad:"38",
        estado:"casado"
    })
});


app.listen(puerto, ()=>{
    console.log(`Servidor escuchando en el puerto ${puerto}`);
})