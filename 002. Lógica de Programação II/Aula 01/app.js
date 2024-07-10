let $titulo = document.querySelector("h1");
$titulo.innerHTML = "Jogo do Número Secreto";

let $numeroMaximo = 100;
let $paragrafo = document.querySelector("p");
$paragrafo.innerHTML = `Escolha um número entre 1 e ${$numeroMaximo}`;

function verificarTentativa() {
    console.log("Este botão foi clicado!")
}