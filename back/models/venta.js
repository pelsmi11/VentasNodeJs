var mongoose = require('mongoose');
var schema =   mongoose.schema;

var VentaSchema= mongoose.Schema({
    idcliente: {type: mongoose.Schema.ObjectId, ref: 'cliente'},
    iduser: {type: mongoose.Schema.ObjectId, ref: 'user'},
    fecha:  {type: Date,default: Date.now},
   
});

module.exports = mongoose.model('venta',VentaSchema);