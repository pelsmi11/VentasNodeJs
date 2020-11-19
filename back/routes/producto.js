var express = require('express');
const ProductoController = require('../controllers/ProductoController');
var productoController= require('../controllers/ProductoController');
var multipart = require('connect-multiparty');
var path = multipart({uploadDir: './uploads/productos'});

var api = express.Router();

api.post('/producto/registrar',path,productoController.registrar);
api.get('/productos/:titulo?',productoController.listar);
api.put('/producto/editar/:id/:img?',path,productoController.editar);
api.get('/producto/registro/:id',productoController.obtener_producto);
api.delete('/producto/eliminar/:id',productoController.eliminar);
api.put('/producto/stock/:id',productoController.update_stock);
//api.get('/categorias/:nombre?',categoriaController.listar);

module.exports = api;