let $pontuacao = prompt("Quantos pontos você fez?")

if ($pontuacao == "") {
    alert("Você não marcou nada")
} else {
    $pontuacao = Number($pontuacao);
    if ($pontuacao < 100) {
        alert("Você perdeu!");
    } else {
        alert("Você ganhou!")
    }
}