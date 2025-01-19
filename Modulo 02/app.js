let listaNumerossorteados = [];
let numeroLimite = 10;
let numeroSecreto = criarNumeroAleatorio();
let tentativas = 1;

// Função para criar textos na tela
//É exemplo de uma função que vai executar alguma coisa, mas não retorna nada
function exibirTextoNaTela(tag, texto) {
    const campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", { rate: 1.2 });
}

function exibirMenssagensIniciais() {
    exibirTextoNaTela("h1", "Jogo do número secreto");
    exibirTextoNaTela("p", "Escolha um número entre 1 a 10");
}

exibirMenssagensIniciais();

//Exemplo de fun
function verificarChute() {
    const chute = document.querySelector("input").value;
    const textoTentativas = tentativas > 1 ? "tentativas" : "tentativa";

    if (chute == numeroSecreto) {
        exibirTextoNaTela("h1", "Acertou!!");
        exibirTextoNaTela(
            "p",
            "Você descubriu o número secreto! Ele era o " +
                chute +
                " com " +
                tentativas +
                " " +
                textoTentativas
        );
        const btnrReset = document
            .querySelector("#reiniciar")
            .removeAttribute("disabled");
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela("p", "O número secreto é menor");
        } else {
            exibirTextoNaTela("p", "O número secreto é maior");
        }
        tentativas++;
        limparCampo();
    }
}

// Função para criar um número aleatório
// Exemplo de uma função que retorna algo
function criarNumeroAleatorio() {
    let numeroSecreto = parseInt(Math.random() * numeroLimite + 1);
    let qntElementosLista = listaNumerossorteados.length;

    if (qntElementosLista == numeroLimite) {
        listaNumerossorteados = [];
    }

    if (listaNumerossorteados.includes(numeroSecreto)) {
        return criarNumeroAleatorio();
    } else {
        listaNumerossorteados.push(numeroSecreto);
        console.log(listaNumerossorteados);

        return numeroSecreto;
    }
}
function limparCampo() {
    const chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo() {
    numeroSecreto = criarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMenssagensIniciais();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}
