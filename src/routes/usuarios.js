const express = require('express');
const router = express.Router();
const {check} = require('express-validator');

const usersController = require('../controllers/usersController');

const validateRegister = [
    check('nombre').isEmpty().withMessage('Debes completar con tu nombre y apellido'),
    check('email').isEmail().withMessage('Debes completar con un email válido'),
    check('username').isLength({min:6, max:15}).withMessage('Nombre de usuario debe tener entre 6-15 caractéres'),
    check('password').isLength({min:6, max:15}).withMessage('Contraseña debe tener entre 6-15 caractéres')
];

router.get('/ingresar', usersController.login);

router.get('/crear_cuenta', usersController.register);

router.post('/crear_cuenta', validateRegister, usersController.store);

router.get('/mi_perfil/:id', usersController.perfilUsuario); //renderiza perfil de usuario con identificador

router.get('/mi_perfil/:id/edit', usersController.edit); // mostrar formulario de edicion que trae datos del usuario. No necesario para esta entrega. 

router.put('/mi_perfil/:id/edit', usersController.editStore); //guarda info de la edicion de perfil. No necesario para esta entrega.

module.exports= router;