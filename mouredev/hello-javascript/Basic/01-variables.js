/*
Clase 16 - Variables
Vídeo: https://youtu.be/1glVfFxj8a4?t=3049
*/

// var

var helloWorld = "¡Hola, JavaScript!"
console.log(helloWorld)

helloWorld = "¡Hola de nuevo, JavaScript!"
console.log(helloWorld)

// var funciona en el ambito global y en el ámbito de función.
// En el ámbito de bloque, no se recomienda su uso.
// Se puede redeclarar y reasignar una variable con var, pero no es recomendable.

// let

let helloWorld2 = "¡Hola, JavaScript 2!"
console.log(helloWorld2)

helloWorld2 = "¡Hola de nuevo, JavaScript 2!"
console.log(helloWorld2)

// let funciona en el ámbito global, en el ámbito de función y en el ámbito de bloque.
// No se puede redeclarar una variable con let, pero sí se puede reasignar.

// const

const helloWorld3 = "¡Hola, JavaScript 3!"
console.log(helloWorld3)

// Error
// helloWorld3 = "¡Hola de nuevo, JavaScript 2!"
// console.log(helloWorld3)