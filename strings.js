// como declarar uma string
let string = "texto";

let mensagem1 = "Olá!";
let mensagem2 = "Tudo bem?";

// contatenação de strings
let concatenar = mensagem1 + " " + mensagem2;

let pessoa = "Jesse";
let mensagem3 = pessoa + ": " + "Olá, tudo bem?"
let mensagem4 = "Olá, " + pessoa + "! " + mensagem2;

let mensagem5 = `${pessoa} Olá, seja bem vinda!`;

//metodo para visualização da variavel
console.log(concatenar);
console.log(mensagem3);
console.log(mensagem4);
console.log(mensagem5);

//exercício

let usuario = prompt("Qual é o seu nome?");
alert(`${usuario}, bem vinda!`);
console.log(usuario);