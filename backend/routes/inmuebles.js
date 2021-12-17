const express = require("express");
const {listAllInmuebles,saveInmueble,searchInmuebles} = require("../controllers/InmuebleController");

const inmuebles = express.Router();

inmuebles.get('/', listAllInmuebles);
inmuebles.post('/', saveInmueble);
inmuebles.get('/busqueda', searchInmuebles);

module.exports = {
    inmuebles
}