let $numeroMaximo = 100;
let $numeroSecreto = gerarNumeroSecreto();

// Função com parâmetro e sem retorno;
function exibirCampo(tag, texto) {
    let $campo = window.document.querySelector(tag);
    $campo.innerHTML = texto;
}
exibirCampo("h1", "Jogo do Número Secreto");
exibirCampo("p", `Escolha um número entre 1 e ${$numeroMaximo}`);

// Função sem parâmetro e com retorno;
function gerarNumeroSecreto() {
    return parseInt(Math.random() * $numeroMaximo + 1);
}

// Função sem parâmetro e sem retorno;
function exibirNoConsole() {
    let $tentativa = document.querySelector("input").value;
    console.log(`A tentiva foi ${$tentativa}. O número secreto é ${$numeroSecreto}`);
}