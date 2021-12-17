const Inmueble = require("../models/Inmueble")


const listAllInmuebles = (req, res) => {
    //console.log(req.inmuebles)
    Inmueble.find((err, inmuebles) => {
        if (err) return res.send(err)
        return res.send(inmuebles)
    })

}

const saveInmueble = (req, res) => {
    let document = req.body;
    Inmueble.find({ "nombreInmueble": document.nombreInmueble }, (err, inmuebles) => {
        if (err) return res.send(err);
        if (inmuebles.length > 0) {
            res.status(400).send({ type: "error", msg: "El documento ya existe!" });
        } else {
            Inmueble.create(req.body).then((data) => {
                console.log(data)
                return res.status(200).send({ type: "ok", msg: "Se creó el documento" });
            }).catch(err => {
                console.log(err);
                return res.status(500).send({ type: "error", msg: err });
            })
        }
    })
}

const searchInmuebles = (req, res) => {
    console.log(req.query)
    Inmueble.find({ 
        "habitaciones": req.query.habitaciones,
        "banos": req.query.banos
    }, (err, inmuebles) => {
        if (err) return res.send(err)
        return res.send(inmuebles)
    })
}


module.exports = {
    listAllInmuebles,
    saveInmueble,
    searchInmuebles
}