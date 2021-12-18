const express = require("express");
const {login} = require("../controllers/AsesoresController")
const asesores = express.Router();

asesores.post('/', login);

module.exports = {
    asesores
}