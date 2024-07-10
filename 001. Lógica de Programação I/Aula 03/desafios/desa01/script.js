alert("Programa de Contagem Regressiva: insira um número para que ele seja contado regressivamente:");
let $inNumero = Number(prompt("Inseri o número:"));
let $outNumero = window.document.getElementById("paragrafo");

while ($inNumero > 0) {
    $outNumero.innerText += `${$inNumero}: <br>`;
    $inNumero--
}

