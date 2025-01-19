//Criar uma função que exibe "Olá, mundo!" no console.
function criandoOlaMundo() {
    console.log("Olá, mundo!");
}
criandoOlaMundo();

//Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
const nome = "Joaquim";
function desejarBoasVindas(nome) {
    return console.log(`Olá, ${nome}!`);
}
desejarBoasVindas(nome);

//Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function dobrarNumero(numero) {
    return console.log(numero * 2);
}
dobrarNumero(5);

//Criar uma função que recebe três números como parâmetros e retorna a média deles.
function calcularmedia(numero1, numero2, numero3) {
    const media = (numero1 + numero2 + numero3) / 3;
    return console.log(media);
}
calcularmedia(1, 2, 3);

//Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function maiorNumero(numero1, numero2) {
    if (numero1 > numero2) {
        return console.log(
            `O primeiro número (${numero1}) é maior do que o segundo (${numero2})`
        );
    } else {
        return console.log(
            `O segundo número (${numero2}) é maior do que o primeiro (${numero1})`
        );
    }
}
maiorNumero(5, 10);

//Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function mutiplicarPorEleMesmo(numero) {
    const mutiplica = numero * numero;
    return console.log(mutiplica);
}
mutiplicarPorEleMesmo(5);
