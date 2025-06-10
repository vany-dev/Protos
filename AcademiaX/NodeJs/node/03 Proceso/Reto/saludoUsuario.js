const nombre = process.argv[2];
if (!nombre) {
    console.log("Por favor, proporciona tu nombre al ejecutar el script.");
    process.exit(1); // Salir con código de error 1
  }

process.stdout.write(`¿${nombre} cuantos años tienes? \n`);
//on es una funcion que escuha los procesos de la terminal  
process.stdin.on('data', data => {
    let res = String(data).trim();
    if(isNaN(res)) {
        console.log(`${nombre} Solo se admite numeros`);
        console.log(`Fin del programa, código ${1}`);
        process.exit();
    }
    process.stdout.write(`Hola ${nombre}, tienes ${res} \n`);
    process.exit();
})

process.on('exit', (code) => {
    process.stdout.write(`\n Saliendo del programa con código: ${code}`);
})