const express = require("express");
const {listAllInmuebles} = require("../controllers/InmuebleController");

const inmuebles = express.Router();

inmuebles.get('/', listAllInmuebles);

module.exports = {
    inmuebles
}