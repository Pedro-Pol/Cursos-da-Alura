function numeroAleatorio() {
    return parseInt(Math.random() * 100 + 1);
}

// Desafio 01
function saudacao() {
    console.log("Olá, mundo!");
}
saudacao();

// Desafio 02
let $nome = "Pedro";
function saudacao_nome(nome) {
    console.log("Olá, " + nome + ".");
}
saudacao_nome($nome);

// Desafio 03
function dobrar(numero) {
    console.log(`O dobro de ${numero} é ${numero*2}.`);
}
let $numero01 = numeroAleatorio();
dobrar($numero01);

// Desafio 04
function realizarMedia(numero1, numero2, numero3) {
    console.log(`A média entre ${numero1}, ${numero2} e ${numero3} é ${((numero1 + numero2 + numero3) / 3).toFixed(2)}.`);
}

let $numero02 = numeroAleatorio();
let $numero03 = numeroAleatorio();
realizarMedia($numero01, $numero02, $numero03);

// Desafio 05
function compararNumeros(numero1, numero2) {
    if (numero1 > numero2) {
        console.log(`Entre os números ${numero1} e ${numero2}; o número ${numero1} é maior.`);
    } else if (numero1 < numero2) {
        console.log(`Entre os números ${numero1} e ${numero2}; o número ${numero2} é maior.`);
    } else {
        console.log(`Ambos os números são iguais.`)
    }
}

compararNumeros($numero01, $numero02);

// Desafio 06
function potenciaDeDois(numero) {
    return numero * numero;
}

console.log(`O número ${$numero01} elevado à potência de dois é ${potenciaDeDois($numero01)}.`);