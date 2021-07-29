const express = require('express');
const router = express.Router();

const usersController = require('../controllers/usersController');

router.get('/ingresar', usersController.login);

router.get('/crear_cuenta', usersController.register);

router.post('/crear_cuenta', usersController.store);

router.get('/mi_perfil/:id', usersController.perfilUsuario); //renderiza perfil de usuario con identificador

router.get('/mi_perfil/:id/edit', usersController.edit); // mostrar formulario de edicion que trae datos del usuario. No necesario para esta entrega. 

router.put('/mi_perfil/:id/edit', usersController.editStore); //guarda info de la edicion de perfil. No necesario para esta entrega.

module.exports= router;