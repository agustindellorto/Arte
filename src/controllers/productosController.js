const path = require('path');
const fs = require('fs');



let controller = {

    galeria: (req, res)=>{
        let productsFilePath = path.join(__dirname, '../database/products.json');
        let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        res.render('galeria', {productos: products})
    },
    detail: (req, res)=>{   /* faltaria conectar con archivoJson para terminar esto*/
        let productsFilePath = path.join(__dirname, '../database/products.json');
        let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        
        let idObra = req.params.id;
        let productoEncontrado = {};

        for (let product of products) {
            if(product.id == idObra){
                productoEncontrado = product;
            }
        }
        console.log(productoEncontrado.)

        res.render('detalle_producto', {product : productoEncontrado});
    },
    createProduct: (req, res) => {
        res.render('crear_producto');
    },
    
    storeProduct: (req, res) => {
        console.log("Aca va la logica de guardar producto en el archivoJson");
    },

    editProduct: (req, res) => {
        let productsFilePath = path.join(__dirname, '../database/products.json');
        let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

        let id = req.params.id;
		let obraId;

		for (let obra of products){
			if (id==obra.id){
				obraId=obra;
			}
		}
        
		
        res.render('editar_producto',{obraAEditar: obraId}); 
    },

    editStore: (req, res) => {
        let productsFilePath = path.join(__dirname, '../database/products.json');
        let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

        let id = req.params.id;
        console.log("datos:",req.body);

/*
		for (let obra of products){
			if (id==obra.id){
				obra.name= req.body.name;
				obra.artist= req.body.artist;
				obra.medium= req.body.medium;
				obra.category= req.body.category;
				obra.description= req.body.description;
                obra.size= req.body.size;
                obra.price= req.body.price;
                obra.discount= req.body.discount;
				
			}
		}

		fs.writeFileSync(productsFilePath, JSON.stringify(products,null,' '));

		res.redirect('/');*/
    },

    delete: (req, res) => {
        console.log("Aca va la logica eliminar de producto en el json");
    },
}

module.exports = controller;