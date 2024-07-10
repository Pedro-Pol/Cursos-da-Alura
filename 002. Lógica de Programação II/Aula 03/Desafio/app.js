// Desafio 01
/*
window.alert("Vamos calcular seu IMC!");
let $altura = Number(prompt("Qual sua altura em metros?"));
let $peso = Number(prompt("Qual sua altura em quilogramas?"));
let $imc = calcularIMC($altura, $peso);
console.log($imc);
let $imc_classificacao = classificarIMC(Number($imc));
console.log($imc_classificacao);
alert(`O seu IMC é de ${$imc}, o que se classifica como IMC de ${$imc_classificacao}.`)

function calcularIMC(altura, peso) {
    return (peso / (altura * altura)).toFixed(2);
}
*/

function classificarIMC(imc) {
    let $classificacao = ""
    if (imc < 18.5) {
        $classificacao = "magreza";
    } else if (imc < 25) {
        $classificacao = "normalidade";
    } else if (imc < 30) {
        $classificacao = "sobrepeso";
    } else if (imc < 35) {
        $classificacao = "obesidade de grau I";
    } else if (imc < 40) {
        $classificacao = "obesidade de grau II" ;
    } else {
        $classificacao = "obesidade de grau III";
    };
    return $classificacao;
}

// Desafio 02

/*
let $numero = prompt(`Vamos calcular o fatorial do seguinte número:`);
let $fatorial = calcularFatorial($numero);
function calcularFatorial(numero) {
    let $resposta = 1;
    if (numero == 0 || numero == 1) {
        return $resposta;
    } else {
        for (i = numero; i > 0; i--) {
            $resposta *= i;
        }
        return $resposta;
    }
}
*/
//alert(`O fatorial de ${$numero} (!${$numero}) é ${$fatorial}.`);

// Desafio 03

// Desafio 04

// Desafio 05

// Desafio 06