// Desafio 01
console.log("Boas-vindas");
// Desafio 02
let $nome = "Pedro";
console.log("Olá, " + $nome + ".");
// Desafio 03
alert("Olá, " + $nome + ".");
// Desafio 04
let $linguagemPreferida = prompt("Qual a sua linguagem de programação preferida, " + $nome + "?");
console.log($linguagemPreferida);
// Desafio 05
let $valor01 = Number(parseInt(Math.random() * 100 + 1));
let $valor02 = Number(parseInt(Math.random() * 100 + 1));
let $resultadoSoma = $valor01 + $valor02;
console.log("O resultado da soma de " + $valor01 + " e " + $valor02 + " é igual a " + $resultadoSoma + ".");
// Desafio 06
let $valor03 = Number(parseInt(Math.random() * 100 + 1));
let $valor04 = Number(parseInt(Math.random() * 100 + 1));
let $resultadoSubtracao = $valor03 - $valor04;
console.log("O resultado da subtração de " + $valor03 + " e " + $valor04 + " é igual a " + $resultadoSubtracao + ".");
// Desafio 07
let $idade = Number(prompt("Qual sua idade?"));
$idade >= 18 ? console.log("O usuário já atingiu a maioridade.") : console.log("O usuário não atingiu a maioridade.");
// Desafio 08
let $numero = Number(prompt("Digite qualquer número, positivo ou negativo."));
if ($numero == 0) {
    console.log("O número indicado é zero.");
} else {
    $numero > 0 ? console.log("Trata-se de um número positivo."): console.log("Trata-se de um número negativo.");
}
// Desafio 09
let $contador = 1;
while ($contador <= 10) {
    console.log($contador);
    $contador++;
}
// Desafio 10
let $nota = Number(prompt("Qual sua última nota?"));
$nota >= 7 ? console.log("Aprovado.") : console.log("Reprovado.");
// Desafio 11, 12 e 13
let $aleatorio01 = Math.random();
console.log($aleatorio01 + ".");
let $aleatorio02 = parseInt(Math.random() * 10 + 1, 10);
console.log($aleatorio02 + ".");
let $aleatorio03 = parseInt(Math.random() * 1000 + 1, 10);
console.log($aleatorio03 + ".");