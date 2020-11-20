var Venta = require('../models/venta');
var DetalleVenta = require('../models/detalleventa');
const ProductoController = require('./ProductoController');
var Producto = require('../models/producto');

function registrar(req,res){
    let data = req.body;
    var venta = new Venta();
    venta.idcliente = data.idcliente;
    venta.iduser = data.iduser;

    venta.save((err,venta_save)=>{
        if(venta_save){
            let detalles = data.detalles;

            detalles.forEach((element,index) => {
                var detalleventa = new DetalleVenta();
                detalleventa.idproducto = element.idproducto;
                detalleventa.cantidad = element.cantidad;
                detalleventa.venta = venta_save._id;

                detalleventa.save((err,detalle_save)=>{
                    if(detalle_save){
                        Producto.findById({_id:element.idproducto},(err,producto_data)=>{
                            if(producto_data){
                                Producto.findByIdAndUpdate({_id:producto_data._id},{stock: parseInt(producto_data.stock) - parseInt(element.cantidad)},(err,producto_edit)=>{
                                    res.end();
                                })
                            }else{
                                res.send(err);
                            }
                        });
                    }else{
                        res.send(err);
                    }
                });
            });
        }else{
            res.send(err);
        }
    });
}

//ejemplo json para endpoint
/*
{
    "idcliente": "5fb6104056360740807fa46a",
    "iduser": "5fae286d9bf23f085484c8a4",
    "detalles": [
        {"idproducto" : "5fb0130cf1f0023e70bd655b","cantidad": "6"},
        {"idproducto" : "5fb49ee5dffac33fe4eb118c","cantidad": "6"}
    ]
}
*/ 

module.exports= {
    registrar,
}