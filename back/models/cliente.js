var mongoose = require('mongoose');
var schema =   mongoose.schema;

var ClienteSchema= mongoose.Schema({
    nombres: String,
    dpi: String,
    correo: String,
    puntos: Number,
    createAt: {type: Date, default: Date.now}
});

module.exports = mongoose.model('cliente',ClienteSchema);