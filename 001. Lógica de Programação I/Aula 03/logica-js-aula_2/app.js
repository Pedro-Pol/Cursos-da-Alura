let $numeroSecreto = 21;
console.log($numeroSecreto);

alert(`Bem vindo ao jogo do número secreto. Tente várias vezes até acertar!`);
let $tentativa
console.log($tentativa)
let $tentativas = 0;

while ($numeroSecreto != $tentativa) {
    $tentativa = Number(prompt(`Tente acertar o número secreto (0 a 100):`));
    console.log($tentativa);
    $tentativas++
    if ($numeroSecreto == $tentativa) {
        alert(`Parabéns, você acertou! É realmente ${$numeroSecreto}. Você tomou ${$tentativas} tentativas para acertar.`);
    } else {
        if ($numeroSecreto > $tentativa) {
            alert(`O número secreto é maior que ${$tentativa}.`)
        } else {
            alert(`O número secreto é menor que ${$tentativa}.`)
        }
    }
}