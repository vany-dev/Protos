const util = require('util');
const fs = require('fs');

// export NODE_DEBUG=desarrollo
const depurar = util.debuglog('desarrollo');
console.log('Log'); 
depurar('Depuración');

/* 
Módulo util:

https://nodejs.org/dist/latest/docs/api/util.html

Guardar variables de ambiente es diferente en cada shell en diferentes sistemas operativos. Por eso es importante conocer muy bien tu terminal. Estas son las formas más comunes:

Linux/MacOS:

csh/tcsh: setenv VARIABLE valor
bash/ksh: export VARIABLE=valor

Windows:

powershell: $env:VARIABLE = 'valor'
*/