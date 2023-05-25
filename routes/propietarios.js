const express = require('express');
const router = express.Router();
const personasController = require('../controlador')
router.get('/',personasController.getAll)
router.get('/:rfc' , personasController.buscarpropietario)
router.get('/crear/:rfc/:nombre' , personasController.agregarpropietario)
router.get('/actualizar/:rfc/:nombre' , personasController.editarpropietario)
router.get('/borrar/:rfc' , personasController.borrarpropietario)
module.exports = router;