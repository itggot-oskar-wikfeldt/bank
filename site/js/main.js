var saldo = 50;

function loan() {
    var x = parseInt(document.getElementById("loanInput").value);
    document.getElementById("loanInput").value = "";
    if (!isNaN(x) && x > 0) {
        saldo += x;
        document.getElementById("saldo").innerHTML = "Saldo: " + saldo + "kr";
    }
}