var mongoose = require('mongoose');
var schema =   mongoose.schema;

var DetalleVentaSchema= mongoose.Schema({
    idproducto: {type: Schema.ObjectId, ref:'producto'},
    cantidad: Number,
});

module.exports = mongoose.model('detalleventa',DetalleVentaSchema);