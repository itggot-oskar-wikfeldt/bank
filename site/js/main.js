var saldo = 50;

function loan() {
    var x = parseInt(document.getElementById("loanInput").value);
    document.getElementById("loanInput").value = "";
    if (!isNaN(x) && x > 0) {
        saldo += x;
        document.getElementById("saldo").innerHTML = "Saldo: " + saldo + "kr";
        console.log("adaaam");
        var success = document.querySelector("success");
        success.classList.remove("hidden");
    }
}

function openOverview() {
    var overview = document.querySelector("#overview");
    overview.classList.toggle("up");
}

document.getElementById("loanInput")
    .addEventListener("keyup", function (event) {
        event.preventDefault();
        if (event.keyCode == 13) {
            document.getElementById("loanButton").click();
        }
    });