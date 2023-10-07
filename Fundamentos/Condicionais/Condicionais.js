// Condicionais
/*
if - Se
else - Senão
else if - Senão se
*/

var numero = 1;

if(numero == 1){ // true

    console.log("O numero é 1");

} else if(numero == 2){ // false

    console.log("O numero é 2");

} else { // false

    console.log("O numero não é nem 1 e nem 2");

};

const logado =false;

// o if verifica se tal condição é verdadeira para poder executa-la

if(logado){ // false
    console.log("Usuario logado");
} else { // true
    console.log("Usuario não logado"); // executada
}

// Condicionais
/*
Swith - Caso
*/

var nome = "Pedro";

switch(nome){
    case "Joao": console.log("O nome é joão"); // false
    case "Maria": console.log("O nome é Maria"); // false
    case "Pedro": console.log("O nome é Pedro"); // true
}

// Ele entrará no caso verdadeiro que contem o mesmo valor e executara o comando, no caso imprimirar Pedro que o caso de mesmo valor

// Condicionais
/*
While - Enquanto
*/
