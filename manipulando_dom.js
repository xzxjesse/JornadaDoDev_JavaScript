// captura de elemento por ID
let titulo1 = document.getElementById("titulo1")
console.log(titulo1)

// captura de elemento por CLASS
let titulo2 = document.getElementsByClassName("titulo2")
console.log(titulo2)

// captura de elemento por TAGS
let tags = document.getElementsByTagName("p")
console.log(tags)

// inserir dinamicamente
let novo_titulo = document.getElementById("titulo1").innerHTML = "Título gerado pelo JS"

let boas_vindas = document.getElementById("nome").innerHTML = prompt("Qual é o seu nome?")

let msg = prompt("ver msg escondida? 1. sim; 2. não")
if (msg === "1"){
    let novo_elemento = document.createElement("h2");
    novo_elemento.innerHTML = "elemento gerado pelo JS"
    document.body.appendChild(novo_elemento)
}

// remover elemento
let remover_nome = document.getElementById("nome");
remover_nome.remove();