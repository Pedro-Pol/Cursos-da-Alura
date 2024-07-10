/*
alert("Boas vinda ao jogo do número secreto");
let $numeroSecreto = 29;
let $numeroTentado = Number(prompt("Escolha um número entre 1 e 30!?"));

if ($numeroSecreto == $numeroTentado) {
    console.log("Isso aí! Você descobriu, nerdão. Era " + $numeroSecreto + " mesmo.")
}
*/
alert("Boas vindas ao nosso site!");
let $nome = "Lua";
let $idade = 25;
let $numeroDeendas = 50;
let $saldoDsiponível = 10000;
let $mensagemDeErro = "Erro! Preencha todos os campos!";
alert($mensagemDeErro);
let $nomeDoUsuario = prompt("Qual é o seu nome, queride(a, o)?");
let $idadeDoUsuário = prompt("Qual é a sua idade, queride(a, o)?")

if ($idadeDoUsuário >= 18) {
    alert("Você já pode liberar esse cuzinho!")
}
