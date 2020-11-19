const cliente = require('../models/cliente');
var Cliente = require('../models/cliente');


//http://127.0.0.1:4201/api/cliente/registrar
function registrar(req,res){
    let data = req.body;
    var cliente = new Cliente();
    cliente.nombres = data.nombres;
    cliente.correo = data.correo;
    cliente.dpi = data.dpi;
    cliente.puntos = 10;

    cliente.save((err,cliente_save)=>{
        if(cliente_save){
            res.status(200).send({cliente: cliente_save});
        }else{
            res.status(500).send(err);
        }
    });

}

//http://127.0.0.1:4201/api/cliente/editar/5fb6104056360740807fa46a
function editar(req,res){
    let id = req.params['id'];
    let data = req.body;

    cliente.findOneAndUpdate(id,{nombres: data.nombres, correo: data.correo, dpi: data.dpi},(err, cliente_edit)=>{
        if(cliente_edit){
            res.status(200).send({cliente: cliente_edit});
        }else{
            res.status(500).send(err);
        }
    });
}

//http://127.0.0.1:4201/api/cliente/eliminar/5fb6104956360740807fa46b
function eliminar(req,res){
    let id = req.params['id'];

    Cliente.findByIdAndRemove(id,(err,cliente_delete)=>{
        if(cliente_delete){
            res.status(200).send({cliente:cliente_delete});
        }else{
            res.status(500).send(err);
        }
    });
}

module.exports={
    registrar,
    editar,
    eliminar,

}