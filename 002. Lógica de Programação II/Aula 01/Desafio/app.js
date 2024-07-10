let $titulo = document.querySelector("h1");
$titulo.innerHTML = "Hora do Desafio";

function clicar() {
    console.log("Este botão foi clicado!");
}

function amar() {
    window.alert("Eu amo JS!");
}

function cidade() {
    let $cidade = window.prompt("Em qual cidade do Brasil você já esteve?");
    window.alert(`Curioso, quando estive em ${$cidade}, me lembrei de você!`);
}

function somar() {
    let $numero1 = Number(window.prompt("Escreva um número para ser somado:"));
    let $numero2 = Number(window.prompt("Agora diga um segundo número:"));
    window.alert(`Bem a soma de ${$numero1} e ${$numero2} é igual a ${($numero1 + $numero2)}!`);
}