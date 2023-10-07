// Para verificar o tipo de dado usa-se o "typeof"
var nome = "String";
console.log(typeof nome); // String

var numero = 1234;
console.log(typeof nome); // Number

var permitir = true;
console.log(typeof permitir); // Boolean

var numeros = [1,2,3,4,5,6];
console.log(typeof numeros); // Array
// ...

// Tipos de Variaveis

// Numero
var idade = 10;
var preco = 35.50;

// String
var nome = "joao"
var mensagem = "Bom dia"

// Booleano
var permitir = true;
var naoPermitir = false;

// Array
var numeros = [1,2,3,4,5,6];
var meses = ["Janeiro", "Fevereiro, Março, Abril"];

// objeto
var pessoa = {
    nome: "joao",
    idade: 19,
    empregado: true
}

// Undefined(variaveis são iniciadas vazias)
var nome;
var idade;

// NULL(dados vazios)
var nome = null;
var idade = null;

// Funções
var VariavelfuncaoMensagem = function(mensagem) {
    return mensagem;
};

VariavelfuncaoMensagem("Olá mundo");