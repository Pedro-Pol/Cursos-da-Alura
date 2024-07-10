let $numeroMaximo = 100;
reiniciarJogo();

// Função com parâmetro e sem retorno;
function exibirCampo(tag, texto) {
    let $campo = window.document.querySelector(tag);
    $campo.innerHTML = texto;
}

// Função sem parâmetro e com retorno;
function gerarNumeroSecreto() {
    return parseInt(Math.random() * $numeroMaximo + 1);
}

// Função sem parâmetro e sem retorno;
function verificarTentativa() {
    let $tentativa = document.querySelector("input").value;

    let $complemento = "";
    if ($numeroDeTentativa > 3) {
        $complemento = `${$numeroDeTentativa} tentativas`;
    } else if ($numeroDeTentativa > 1) {
        $complemento = `apenas ${$numeroDeTentativa} tentativas`;
    } else {
        $complemento = `apenas uma tentativa!!`
    }

    let $textoFinal = `Parabéns, você acertou que o número secreto é ${$numeroSecreto}, com ${$complemento}!`

    if ($numeroSecreto == $tentativa) {
        exibirCampo("h1", "Acertou!");
        exibirCampo("p", $textoFinal);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else if ($numeroSecreto > $tentativa) {
        exibirCampo("p", `Tente novamente! O número secreto é <em>maior</em> que ${$tentativa}!`);
        $numeroDeTentativa++
        limparCampo();
    } else {
        exibirCampo("p", `Tente novamente! O número secreto é <em>menor</em> que ${$tentativa}!`);
        $numeroDeTentativa++
        limparCampo();
    }
}

function limparCampo() {
    let $tentativa = document.querySelector("input");
    $tentativa.value = "";

}

function reiniciarJogo() {
    $numeroSecreto = gerarNumeroSecreto();
    $numeroDeTentativa = 1;
    limparCampo()
    exibirCampo("h1", "Jogo do Número Secreto");
    exibirCampo("p", `Escolha um número entre 1 e ${$numeroMaximo}`);
    console.log(`O número secreto é ${$numeroSecreto}.`)
    document.getElementById("reiniciar").setAttribute("disabled", true);
}