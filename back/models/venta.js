var mongoose = require('mongoose');
var schema =   mongoose.schema;

var VentaSchema= mongoose.Schema({
    idcliente: {type: schema.ObjectId, ref: 'cliente'},
    iduser: {type: schema.ObjectId, ref: 'user'},
    fecha:  {type: Date,default: Date.now},
   
});

module.exports = mongoose.model('venta',VentaSchema);