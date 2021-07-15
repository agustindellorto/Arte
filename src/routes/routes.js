const express = require('express');
const router = express.Router();

const controller = require('../controllers/controllers');

router.get('/', controller.index);

router.get('/detalle_producto', controller.detalleProducto);

router.get('/carrito', controller.carrito);

router.get('/login', controller.login);

router.get('/registro', controller.registro);

router.get('/about', controller.about);

router.get('/galeria', controller.galeria);

router.get('/contact', controller.contact);

module.exports= router