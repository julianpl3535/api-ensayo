const mongoose = require("mongoose");

const conexion = async () => {
    try {
        
        await mongoose.connect("mongodb://localhost:27017/mi_blog");
        console.log("Que hp tan mostro, ya se conecto a la base de datos");

    } catch (error) {
        console.log("Mera gueva, no se ha conectado a la base de datos");
    }
}

module.exports = {
    conexion
}