var mongoose = require('mongoose');
var schema =   mongoose.schema;

var ProductoSchema= mongoose.Schema({
    titulo: String,
    descripcion: String,
    imagen: String,
    precio_compra: Number,
    precio_venta: Number,
    stock: Number,
    idcategoria: {type: mongoose.Schema.ObjectId, ref: 'categoria'},
    //idcategoria: {type: schema.ObjectId, ref: 'categoria'},
    //idcategoria: {type: schema.ObjectId, ref: 'categoria'},
    puntos: Number,
});

module.exports = mongoose.model('producto',ProductoSchema);