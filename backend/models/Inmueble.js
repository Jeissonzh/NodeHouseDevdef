const {Schema, model} = require("mongoose");

const inmuebleSchema = new Schema({
    habitaciones:{
        type: Number
    },
    banos:{
        type: Number
    },
    patio:{
        type: String
    },
    pisos:{
        type: Number
    },
    sector: {
        type: String
    },
    precio: {
        type: Number
    },
    cocinaIntegral: {
        type: String
    },
    nombreAsesor:{
        type: String
    },
    nombreInmueble:{
        type: String
    },
    vistas:{
        type: Number
    },
    
    
});

module.exports = model("Inmueble",inmuebleSchema,"")