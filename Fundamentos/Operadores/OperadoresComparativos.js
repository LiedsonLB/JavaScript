// Operadores de Comparação
/*
    == - valor igual
    != - valor diferente
    === - valor e tipo igual
    !== valor ou tipo diferente
*/

var x = 1;
var y = 2;

console.log(x == y); // false
console.log(x != y); // true

// valor e tipo
var x = 1; // Number
var y = "1"; // String

// Verifica se ele tem o mesmo valor

console.log(x == y); // true

// Verifica se ele tem o mesmo tipo e valor

console.log(x === y); // false
console.log(x !== y); // true