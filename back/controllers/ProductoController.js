const producto = require('../models/producto');
var Producto= require('../models/producto');
var fs = require('fs');

function registrar(req,res){
    var data = req.body;
    if(req.files){
        var imagen_path = req.files.imagen.path;
        var name = imagen_path.split('\\');
        var imagen_name = name[2];

        var producto = new Producto();
        producto.titulo = data.titulo;
        producto.descripcion = data.titulo;
        producto.imagen = imagen_name;
        producto.precio_compra = data.precio_compra;
        producto.precio_venta = data.precio_venta;
        producto.stock = data.stock;
        producto.idcategoria = data.idcategoria
        producto.puntos=data.puntos;

        producto.save((err, producto_save)=>{
            if(err){
                res.status(500).send({message: 'error en el servidor'});
            }else{
                if(producto_save){
                    res.status(200).send({producto: producto_save});
                }else{
                    res.status(403).send({message: 'No se registro el rpoducto'});
                }
            }

        });

    }else{
        

        var producto = new Producto();
        producto.titulo = data.titulo;
        producto.descripcion = data.titulo;
        producto.imagen = null;
        producto.precio_compra = data.precio_compra;
        producto.precio_venta = data.precio_venta;
        producto.stock = data.stock;
        producto.idcategoria = data.idcategoria
        producto.puntos=data.puntos;

        producto.save((err, producto_save)=>{
            if(err){
                res.status(500).send({message: 'error en el servidor'});
            }else{
                if(producto_save){
                    res.status(200).send({producto: producto_save});
                }else{
                    res.status(403).send({message: 'No se registro el rpoducto'});
                }
            }

        });
    }
}

function listar (req, res){
    var titulo = req.params['titulo'];

    producto.find({titulo: new RegExp(titulo,'i')}, (err,productos_listado)=>{
        if(err){
            res.status(500).send({message: 'Error en el servidor'});

        }else{
            if(productos_listado){
                res.status(200).send({productos:productos_listado});
            }else{
                res.status(403).send({message: 'no hay ningun registro con ese titulo'});
            }
        }
    });
}

function editar (req, res){
    var data = req.body;
    var id = req.params['id'];
    var img = req.params['img'];
    if(req.files){

        if(img || img != null ||img != undefined){
            fs.unlink('./uploads/productos/'+img, (err)=>{
                if(err) throw err;
            });
        }

        var imagen_path = req.files.imagen.path;
        var name = imagen_path.split('\\');
        var imagen_name= name[2];
        
        Producto.findByIdAndUpdate({_id:id},{titulo: data.titulo, descripcion: data.descripcion, imagen: imagen_name,
        precio_compra: data.precio_compra, precio_venta: data.precio_venta, stock: data.stock, idcategoria: data.idcategoria,
    puntos: data.puntos}, (err, producto_edit)=>{
        if(err){
            res.status(500).send({message: 'Error en el servidor'});
        }else{
            if(producto_edit){
                
                res.status(200).send({producto: producto_edit});
            }else{
                res.status(403).send({message: 'no se edito el producto'});
            }
        }
    });
    
    }else{
        Producto.findByIdAndUpdate({_id:id},{titulo: data.titulo, descripcion: data.descripcion,
            precio_compra: data.precio_compra, precio_venta: data.precio_venta, stock: data.stock, idcategoria: data.idcategoria,
        puntos: data.puntos}, (err, producto_edit)=>{
            if(err){
                res.status(500).send({message: 'Error en el servidor'});
            }else{
                if(producto_edit){
                    res.status(200).send({producto: producto_edit});
                }else{
                    res.status(403).send({message: 'no se edito el producto'});
                }
            }
        });
    }

}


//http://127.0.0.1:4201/api/producto/registro/5fb1ff265c2d132600ef3bbd
function obtener_producto(req,res){
    var id = req.params['id'];

    producto.findOne({_id:id},(err,producto_data)=>{
        if(err){
            res.status(500).send({message : 'Error en el servidor'});
        }else{
            if(producto_data){
                res.status(200).send({producto: producto_data});

            }else{
                res.status(403).send({message: 'no se pudo obtener el producto'});
            }
        }

    });
}
//http://127.0.0.1:4201/api/producto/eliminar/5fb1ff265c2d132600ef3bbd
function eliminar(req,res){
    var id = req.params['id'];

    producto.findOneAndRemove({_id:id},(err,producto_delete)=>{
        if(err){
            res.status(500).send({message: 'error en el servidor'});
        }else{
            if(producto_delete){
                
                    fs.unlink('./uploads/productos/'+producto_delete.imagen, (err)=>{
                        if(err) throw err;
                    });
                
                res.status(200).send({producto_delete});
                
            }else{
                res.status(403).send({message: 'error al eliminar el producto'});
            }
        }
    });
}

function update_stock(req,res){
    let id = req.params['id'];
    let data = req.body

    Producto.findById(id,(err,producto_data)=>{
        if(producto_data){
            producto.findByIdAndUpdate(id,{stock: parseInt(producto_data.stock)+parseInt(data.stock)},(err,producto_edit)=>{
                if(producto_edit){
                    res.status(200).send(producto_edit)
                }else{
                    res.status(500).send(err);
                }
            });
        }
    });
}
module.exports={
    registrar,
    obtener_producto,
    editar,
    eliminar,
    listar,
    update_stock,
}
