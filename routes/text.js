
const { Router } = require('express');
const { check } = require('express-validator');
const { textoGet } = require('../controllers/text');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();


router.get('/iecho',
    [ // middlewares
        check('text', 'El texto es obligatorio').not().isEmpty(),
        validarCampos,
        textoGet
    ]);


module.exports = router;