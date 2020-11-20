var mongoose = require('mongoose');
var schema =   mongoose.schema;

var DetalleVentaSchema= mongoose.Schema({
    idproducto: {type: mongoose.Schema.ObjectId, ref:'producto'},
    cantidad: Number,
    venta: {type:mongoose.Schema.ObjectId, ref:'venta'}
});

module.exports = mongoose.model('detalleventa',DetalleVentaSchema);