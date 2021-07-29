
let controller = {
    galeria: (req, res)=>{
        res.render('galeria');  /*Conectar con archivoJson, enviar como variable el array de productos y hacer un for en la vista para mostrarlos todos */
    },
    detail: (req, res)=>{   /* faltaria conectar con archivoJson para terminar esto*/
        let idObra = req.params.id;
        res.render('detalle_producto');
    },
    createProduct: (req, res) => {
        res.render('crear_producto');
    },
    
    storeProduct: (req, res) => {
        console.log("Aca va la logica de guardar producto en el archivoJson");
    },

    editProduct: (req, res) => {
        res.render('editar_producto'); /* falta poner la logica para traer el formulario con los datos de "x" producto a editar*/
    },

    editStore: (req, res) => {
        console.log("Aca va la logica guardar edicion de producto en el json");
    },

    delete: (req, res) => {
        console.log("Aca va la logica eliminar de producto en el json");
    },
}

module.exports = controller;