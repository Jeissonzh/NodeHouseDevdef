const Inmueble = require("../models/Inmueble")

const listAllInmuebles = (req, res) => {
    console.log(req.user)
    Inmueble.find((err, inmuebles) => {
        if (err) return res.send(err)
        return res.send(inmuebles)
    })
}

module.exports = {
    listAllInmuebles
}