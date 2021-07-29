const express = require('express');
const router = express.Router();

const productosController = require('../controllers/productosController');


router.get ('/', productosController.galeria);

router.get ('/detalle_producto/:id', productosController.detail);

router.get ('/crear_producto', productosController.createProduct);

router.post ('/crear_producto', productosController.storeProduct);

router.get ('/editar_producto/:id', productosController.editProduct);

router.put ('/editar_producto/:id', productosController.editStore);

router.delete('/:id', productosController.delete);


module.exports = router;