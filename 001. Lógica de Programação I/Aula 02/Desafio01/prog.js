let $diaDaSemana = prompt("Que dia da semana é hoje?");
$diaDaSemana = $diaDaSemana.toLocaleLowerCase();

if ($diaDaSemana == "domingo" || $diaDaSemana == "sábado" || $diaDaSemana == "sabado") {
    alert("Bom final de semana!")
} else {
    alert("Boa semana!")
}

