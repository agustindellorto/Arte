const express = require('express');
const router = express.Router();

const productosController = require('../controllers/productosController');


router.get ('/', productosController.galeria);

router.get ('/detalle_producto/:id', productosController.detalleProducto);

router.get ('/crear_producto', productosController.crearProducto);

router.get ('/editar_producto', productosController.editarProducto);

module.exports = router;