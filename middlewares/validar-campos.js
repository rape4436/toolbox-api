const { response } = require('express');
const { validationResult } = require('express-validator');

const validarCampos = (req, res = response, next) => {

    // manejo de errores
    const errors = validationResult( req );
    if ( !errors.isEmpty() ) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        });
    }
/*
    const { text = 'No text' } = req.query;
    if ( !validateString(text) ) {
        return res.status(401).json({
            ok: false,
            errors: 'No text'
        });
    }
*/
    next();
}

const validateString = cadena => {
    let regExpresion = new RegExp('[0-9]');
    console.log(regExpresion.test(cadena))
}

module.exports = {
    validarCampos
}

