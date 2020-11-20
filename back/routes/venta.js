var express = require('express');
var ventaController= require('../controllers/VentaController');

var api = express.Router();

api.post('/venta/registrar', ventaController.registrar);

module.exports = api;