alert("Bem-vindo ao jogo do número secreto");

//pedindo ao usuario que escolha até qual valor maximo que deseja que seja gerado
const numeroMaximo = parseInt(prompt("Escolha um número maximmo"));
//criando numero aleatorio
const numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);

let numeroEscolhido;
let tentativas = 1;

//Enquanto o chute não for igual ao numero secreto, o jogo continua
while (numeroEscolhido !== numeroSecreto) {
    numeroEscolhido = Number(
        prompt(`Escolha um número entre 1 e ${numeroMaximo}`)
    );
    if (numeroEscolhido === numeroSecreto) {
        break;
    } else {
        if (numeroEscolhido > numeroSecreto) {
            alert(`O número secreto é menor ${numeroEscolhido}`);
        } else {
            alert(`O número secreto é maior ${numeroEscolhido}`);
        }
        tentativas++;
    }
}

//Tentativas for igual a 1? usar tentativas senão usar tentativa
let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(
    `Parabéns, vocé acertou o número secreto que era ${numeroSecreto}, com ${tentativas} ${palavraTentativa}`
);
