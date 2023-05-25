const express = require('express');
const router = express.Router();
const propietariosController = require('../controlador')
router.get('/',propietariosController.getAll)
router.get('/:clave_catastral' , propietariosController.buscar)
router.get('/crear/:clave_catastral/:descripcion/:propietarios' , propietariosController.agregar)
router.get('/editar/:clave_catastral/:descripcion/:propietarios' , propietariosController.editar)
router.get('/borrar/:clave_catastral' , propietariosController.borrar)
module.exports = router;