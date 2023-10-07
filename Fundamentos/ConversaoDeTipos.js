// Conversão de Tipos
/*
Number():
let numero1 = Number("123"); // Converte a string "123" em um número
let numero2 = Number(true);  // Converte o valor booleano true em 1

String(): 
let texto1 = String(123);     // Converte o número 123 em a string "123"
let texto2 = String(true);    // Converte o valor booleano true em a string "true"
let texto3 = String({});      // Converte um objeto vazio em a string "[object Object]"

Boolean();
let booleano1 = Boolean(0);         // Converte o número 0 em false
let booleano2 = Boolean("texto");   // Converte uma string não vazia em true
let booleano3 = Boolean(null);      // Converte o valor null em false
*/

var stringnumero = "12";
var converterNumero = Number(stringnumero);

console.log(stringnumero); // "12"
console.log(converterNumero); // 12 