function soma(numero1, numero2){
    return numero1 + numero2;
}

function subtracao(numero1, numero2){
    return numero1 - numero2;
}

function multiplicacao(numero1, numero2){
    return numero1 * numero2;
}

function divisao(numero1, numero2){
    return numero1 / numero2;
}

let parametro1 = parseFloat(prompt("Insira o primeiro número"))
let parametro2 = parseFloat(prompt("Insira o segundo número"))

let operacao = prompt("Escolha a operação:(1. soma; 2. subtração; 3. multiplicação; 4. divisão)")

if(operacao == "1"){
    alert(soma(parametro1, parametro2));
} else if(operacao == "2"){
    alert(subtracao(parametro1, parametro2));
} else if(operacao == "3"){
    alert(multiplicacao(parametro1, parametro2));
} else if(operacao == "4"){
    alert(divisao(parametro1, parametro2));
} else{
    alert("Operação inválida!")
}