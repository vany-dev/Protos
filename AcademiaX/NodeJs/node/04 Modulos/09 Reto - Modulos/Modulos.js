const path = require('path');
const os = require('os');
const http = require('http');
const events = require('events');

// Módulo 'path'
const filePath = path.join(__dirname, 'archivo.txt');
console.log('Ruta del archivo:', filePath);

// Módulo 'os'
console.log('Arquitectura:', os.arch());

// Módulo 'http'
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('¡Hola, mundo!\n');
});

server.listen(3000, '127.0.0.1', () => {
  console.log('Servidor en ejecución en http://127.0.0.1:3000/');
});

// Módulo 'events'
const myEmitter = new events.EventEmitter();
myEmitter.on('eventoPersonalizado', () => {
  console.log('¡Evento personalizado emitido!');
});

myEmitter.emit('eventoPersonalizado');
