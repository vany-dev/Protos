/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea

// Esto es un comentario en una línea

// 2. Escribe un comentario en varias líneas
/*Esto es un comentario
en varias líneas*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let myString = "Hello, World!" // String
let myNumber = 42 // Number
let myBoolean = true // Boolean
let myBooleanFalse = false // Boolean
let myUndefined // Undefined
let myNull = null // Null
let mySymbol = Symbol("mySymbol") // Symbol
let myBigInt = BigInt(123456789012345678901234567890) // BigInt

// 4. Imprime por consola el valor de todas las variables
console.log(myString);
console.log(myNumber);
console.log(myBoolean);
console.log(myBooleanFalse);
console.log(myUndefined);
console.log(myNull);
console.log(mySymbol);
console.log(myBigInt);

// 5. Imprime por consola el tipo de todas las variables
console.log(typeof myString);
console.log(typeof myNumber);
console.log(typeof myBoolean);
console.log(typeof myBooleanFalse);
console.log(typeof myUndefined);
console.log(typeof myNull);
console.log(typeof mySymbol);
console.log(typeof myBigInt);

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
myString = "Goodbye, World!"; // Modificando el String
myNumber = 100; // Modificando el Number
myBoolean = false; // Modificando el Boolean
myBooleanFalse = true; // Modificando el Boolean
myUndefined = undefined; // Modificando el Undefined    
myNull = null; // Modificando el Null
mySymbol = Symbol("newSymbol"); // Modificando el Symbol
myBigInt = BigInt(987654321098765432109876543210); // Modificando el BigInt

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
myString = 123; // Cambiando el String a un Number
myNumber = "This is a string now"; // Cambiando el Number a un String
myBoolean = 1; // Cambiando el Boolean a un Number
myBooleanFalse = "false"; // Cambiando el Boolean a un String
myUndefined = true; // Cambiando el Undefined a un Boolean
myNull = { key: "value" }; // Cambiando el Null a un Object
mySymbol = 456; // Cambiando el Symbol a un Number
myBigInt = "This is a string now"; // Cambiando el BigInt a un String
// Nota: Las últimas modificaciones pueden generar errores en tiempo de ejecución,

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const myConstString = "Constant String"; // String
const myConstNumber = 3.14; // Number
const myConstBoolean = true; // Boolean
const myConstBooleanFalse = false; // Boolean
const myConstUndefined = undefined; // Undefined
const myConstNull = null; // Null
const myConstSymbol = Symbol("constantSymbol"); // Symbol
const myConstBigInt = BigInt(987654321012345678901234567890); // BigInt
// Nota: Las constantes no pueden ser reasignadas, pero si son objetos, sus propiedades pueden ser modificadas.

// 9. A continuación, modifica los valores de las constantes
// Las constantes no pueden ser reasignadas, por lo que intentar modificar su valor generará un error.
// myConstString = "New String"; // Esto generará un error

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse
// myConstString = "New String"; // Esto generará un error
