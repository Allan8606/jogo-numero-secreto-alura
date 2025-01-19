// Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
function calculaIMC(peso, altura) {
    const calculo = peso / (altura * altura);
    return calculo.toFixed(2);
}
console.log(calculaIMC(83, 1.79));

//Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
let fatorial = 1;
function calculaFatorial(numero) {
    for (let index = 2; index <= numero; index++) {
        fatorial *= index;
    }
    return fatorial;
}
console.log(calculaFatorial(10));

//Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
// const largura = prompt("Qual a largura da sala?");
// const altura = prompt("Qual a altura da sala?");

// function calculaPerimetro(l, a) {
//     const area = l * a;
//     const perimetro = 2 * (l + a);
//     return console.log(
//         `A area da sala é ${area} e o perimetro da sala é ${perimetro}`
//     );
// }
// calculaPerimetro(largura, altura);

//Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
const numeroEscolhido = prompt("Qual o numero que deseja ver a tabuada?");
function calculaTabuada(numero) {
    for (let index = 1; index <= 10; index++) {
        console.log(`${numero} x ${index} = ${numero * index}`);
    }
}
calculaTabuada(numeroEscolhido);
