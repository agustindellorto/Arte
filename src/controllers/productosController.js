const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../database/products.json');
const productosArchivo = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


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
        console.log('datos:', req.body)
     /*  let idNuevo=0
      for(let p of productosArchivo){
          if(idNuevo<p.id){
              idNuevo=p.id
          }
      }
        idNuevo++;


        let productoNuevo={
            id: idNuevo,
            name: req.body.nombre,
            date: req.body.fecha,
            medium: req.body.medio,
            category: req.body.tema,
            description: req.body.descripcion,
            width: req.body.ancho,
            height: req.body.alto,
            depth: req.body.profundidad,
            price: req.body.precio,
            img: "obra-arte4.jpg"
        };


        productosArchivo.push(productoNuevo);

        (fs.readFileSync(productsFilePath, 'utf-8'));
        fs.writeFileSync(productsFilePath, JSON.stringify(productosArchivo, null, ' '));

        res.redirect('/galeria')*/
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