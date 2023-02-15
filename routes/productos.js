const { Router } = require('express');
const { check } = require('express-validator');
const { 
    crearProducto, 
    obtenerProductos, 
    obtenerProducto, 
    actualizarProducto, 
    borrarProducto } = require('../controllers/productos');
const { existeProductoPorId, existeCategoriaPorId } = require('../helpers/db-validators');

const { validarJWT, validarCampos, esAdminRole } = require('../middlewares');
const { validate } = require('../models/categoria');



const router = Router();

router.post('/', [
    validarJWT,
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('categoria', 'No es un ID de Mongo valido').isMongoId(),
    check('categoria').custom(existeCategoriaPorId),
    validarCampos
], crearProducto)

router.get('/',[
validarCampos
], obtenerProductos)

router.get('/:id', [
    check('id', 'No es un ID de Mongo valido').isMongoId(),
    check('id').custom(existeProductoPorId),
    validarCampos
    ], obtenerProducto)

router.put('/:id', [
    validarJWT,
    check('id', 'No es un ID de Mongo valido').isMongoId(),
    check('id').custom(existeProductoPorId),
    validarCampos
], actualizarProducto)

router.delete('/:id', [
    validarJWT,
    esAdminRole,
    check('id', 'No es un ID de Mongo valido').isMongoId(),
    check('id').custom(existeProductoPorId),
    validarCampos
], borrarProducto)



module.exports = router;