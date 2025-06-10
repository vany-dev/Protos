const { basename, join } = require('path');
const os = require('os');
const events = require('events');
const http = require('http');


const arq = os.arch();
const transmitir = new events.EventEmitter();


console.log(join(__dirname, basename(__filename)));
console.log(`Arquitectura: ${arq}`);
transmitir.on('eventoPersonalizado', () => {
    console.log('¡Evento personalizado emitido!');
});
transmitir.emit('eventoPersonalizado');

const nombre_del_equipo = '127.0.0.1';
const puerto = 3000;

const server = http.createServer((req, res) =>{
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hola Mundo');
});

server.listen(puerto, nombre_del_equipo, () => {
    console.log(`Servidor en ejecución en http://${nombre_del_equipo}:${puerto}/`);
  });
