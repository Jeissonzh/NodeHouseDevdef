const express = require("express");
const {listAllInmuebles,saveInmueble} = require("../controllers/InmuebleController");

const inmuebles = express.Router();

inmuebles.get('/', listAllInmuebles);
inmuebles.post('/', saveInmueble);

module.exports = {
    inmuebles
}