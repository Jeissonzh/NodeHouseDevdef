const {Schema, model} = require("mongoose");
const jwt = require("jsonwebtoken");

const asesorSchema = new Schema({
    usuario:{
        type: String
    },
    contrasena:{
        type: Number
    },
    telefono:{
        type: Number
    }
});

asesorSchema.methods.generarJWT = ()=>{
    return jwt.sign({
        _id: this._id,
        usuario: this.usuario,
        contrasena: this.contrasena
    },"mongoNode")
}

module.exports = model("Asesor",asesorSchema,"asesores")