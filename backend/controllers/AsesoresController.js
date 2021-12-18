const Asesor = require("../models/Asesores")

const login = (req, res) => {
    req.body.usuario && req.body.contrasena ?
    Asesor.findOne({ usuario: req.body.usuario }, (err, user) => {
            if (err) return res.send({msg: "Ocurrió un error: " + err})
            if (user) {
                if (user.contrasena == req.body.contrasena) {
                    let jwToken = user.generarJWT()
                    return res.send({ msg: "Tienes permisos", token: jwToken })
                }
                return res.send({msg: "Error!, la contraseña no es correcta"})
            }
            return res.send({msg:"El Asesor no existe"})
            
        })
        :
        res.send("No se está enviando el parametro 'usuario' o 'contraseña'")
}
 
// const login = (req, res) => {
    // console.log(req.body.usuario)
    // res.send(req.body.usuario)
// }

module.exports = {
    login
}