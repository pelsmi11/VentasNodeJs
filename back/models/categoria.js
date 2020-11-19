var mongoose = require('mongoose');
var schema =   mongoose.schema;

var CategoriaSchema= mongoose.Schema({
    titulo: String,
    descripcion: String,

});

module.exports = mongoose.model('categoria',CategoriaSchema);