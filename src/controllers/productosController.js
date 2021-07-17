
let controller = {
    galeria: (req, res)=>{
        res.render('galeria');  /*Conectar con base de datos, enviar como variable el array de productos y hacer un for en la vista para mostrarlos todos */
    },
    detalleProducto: (req, res)=>{   /* faltaria conectar con base de datos para terminar esto*/
        let idObra = req.params.id;
        res.render('detalle_producto');
    },
    crearProducto: (req, res) => {
        res.render('crear_producto');
    },
    editarProducto: (req, res) => {
        res.render('editar_producto');
    },
}

module.exports = controller;