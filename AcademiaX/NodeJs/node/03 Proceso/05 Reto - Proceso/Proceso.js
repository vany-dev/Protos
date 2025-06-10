// Obtener el nombre del usuario desde los argumentos de la línea de comandos
const nombreUsuario = process.argv[2];

// Verificar si se proporcionó un nombre de usuario
if (!nombreUsuario) {
  console.log("Por favor, proporciona tu nombre al ejecutar el script.");
  process.exit(1); // Salir con código de error 1
}

// Preguntar la edad al usuario a través de la entrada estándar (stdin)
process.stdout.write(`Hola ${nombreUsuario}! ¿Cuántos años tienes? `);

// Configurar el evento para manejar los datos de entrada (stdin)
process.stdin.on('data', (data) => {
  const edad = parseInt(data.toString().trim());

  // Verificar si se ingresó un número válido
  if (!isNaN(edad)) {
    // Imprimir un mensaje personalizado en la salida estándar (stdout)
    console.log(`¡${nombreUsuario}, tienes ${edad} años!`);
    process.exit(0); // Salir con código de éxito 0
  } else {
    // Si no se ingresó un número válido, solicitar nuevamente la edad
    process.stdout.write(`Por favor, ingresa una edad válida para ${nombreUsuario}: `);
  }
});

// Configurar el evento para manejar el cierre del programa
process.on('exit', (code) => {
  console.log(`Saliendo del programa con código: ${code}`);
});
