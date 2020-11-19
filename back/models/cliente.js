var mongoose = require('mongoose');
var schema =   mongoose.schema;

var ClienteSchema= mongoose.Schema({
    nombres: String,
    dpi: String,
    correo: String,
    puntos: Number,
    
});

module.exports = mongoose.model('cliente',ClienteoSchema);