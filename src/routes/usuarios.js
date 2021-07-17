const express = require('express');
const router = express.Router();

const usersController = require('../controllers/usersController');

router.get('/', usersController.login);

router.get('/crear_cuenta', usersController.register);

router.get('/mi_perfil', usersController.perfilUsuario);

module.exports= router;