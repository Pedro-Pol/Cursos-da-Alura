let $numero = prompt("Digite um número positivo ou negativo!");

if ($numero == "") {
    alert("Você não inseriu nenhum número!")
} else {
    $numero = Number($numero);
    if ($numero < 0) {
        alert("Trata-se de um número negativo!")
    } else if ($numero > 0)  {
        alert("Trata-se de um número positivo!")
    } else {
        alert("Você introduziu o número zero!")
    }
}