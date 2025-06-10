// operaciones.js
const lodash = require('lodash');


function obtenerAleatorio() {
  return lodash.random(1, 100);
}

module.exports = { obtenerAleatorio };
