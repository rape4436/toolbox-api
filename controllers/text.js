const { response } = require('express');

const textoGet = (req, res = response) => {

    const { text } = req.query;
    let texto = invertirString(text);
    let palindrome = palindromeChecker(text);
    res.json({
        texto,
        palindrome
    });
}

const invertirString = cadena => {
    let nuevaCadena = "";
    for (let x = cadena.length - 1; x >= 0; x--) {
        nuevaCadena += cadena[x];
    }
    console.log(nuevaCadena)
    return nuevaCadena;
}

const palindromeChecker = cadena => {
    const newStr = cadena.replace(/[\W_]/g, "").toLowerCase();
    const strReversed = newStr.split("").reverse().join("");

    return newStr === strReversed ? true : false;
}


module.exports = {
    textoGet
}