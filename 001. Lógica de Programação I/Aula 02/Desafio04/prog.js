let $saldo = prompt("Quantos pilas tu tens no banco do bagual, tchê?");

if ($saldo == "") {
    alert("Deixas de ser chinelão, guri! Insere logo os teus dados!")
} else {
    $saldo = Number($saldo);
    alert(
        `Tu tens R$ ${$saldo.toLocaleString("pt-br", {style: "currency", currency: "BRL"})} pilas na tua conta, tchê!`
    )

}