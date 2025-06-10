// Operaciones con el módulo fs en Node.js

const fs = require('fs');
const path = require('path');

const carpeta = 'miCarpeta';

// Crear una carpeta
fs.mkdir(carpeta, (error) => {
  if (error) {
    console.error('Error al crear la carpeta:', error.message);
    return;
  }

  console.log('Carpeta creada exitosamente.');

  // Crear un archivo en la carpeta
  const archivo = path.join(carpeta, 'miArchivo.js');
  fs.writeFile(archivo, 'console.log("Hola mundo");', (error) => {
    if (error) {
      console.error('Error al escribir en el archivo:', error.message);
      return;
    }

    console.log('Archivo creado y escrito exitosamente.');

    // Leer el contenido del archivo
    fs.readFile(archivo, 'utf-8', (error, contenido) => {
      if (error) {
        console.error('Error al leer el archivo:', error.message);
        return;
      }

      console.log('Contenido del archivo:', contenido);

      // Añadir más contenido al archivo
      fs.appendFile(archivo, '\nNueva línea de contenido', (error) => {
        if (error) {
          console.error('Error al añadir contenido al archivo:', error.message);
          return;
        }

        console.log('Contenido añadido exitosamente.');

        // Renombrar el archivo
        const nuevoNombre = path.join(carpeta, 'miNuevoArchivo.js');
        fs.rename(archivo, nuevoNombre, (error) => {
          if (error) {
            console.error('Error al renombrar el archivo:', error.message);
            return;
          }

          console.log('Archivo renombrado exitosamente.');

          // Eliminar el archivo y la carpeta
          fs.unlink(nuevoNombre, (error) => {
            if (error) {
              console.error('Error al eliminar el archivo:', error.message);
              return;
            }

            console.log('Archivo eliminado exitosamente.');

            fs.rmdir(carpeta, (error) => {
              if (error) {
                console.error('Error al eliminar la carpeta:', error.message);
                return;
              }

              console.log('Carpeta eliminada exitosamente.');
            });
          });
        });
      });
    });
  });
});
