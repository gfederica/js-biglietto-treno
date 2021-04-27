
// chiedo età e km da percorrere
var eta = parseInt(prompt("Inserisci la tua età"));
var km = parseInt(prompt("Inserisci i km da percorrere"));

// variabile prezzo base biglietto
var prezzoBase = (0.21 * km);


// stabilisco gli sconti in base all'età e stampo sconto e prezzo
if (eta < 18) {
    var prezzoUnder = (prezzoBase - ((prezzoBase * 20) / 100)).toFixed(2);
    document.getElementById("sconto").innerHTML= "Sconto 20% per under 18";
    document.getElementById("prezzo").innerHTML= prezzoUnder;
    //console.log(prezzoUnder);
} else if (eta > 65) {
    var prezzoOver = (prezzoBase - ((prezzoBase * 40) / 100)).toFixed(2);
    document.getElementById("sconto").innerHTML= "Sconto 40% per over 65";
    document.getElementById("prezzo").innerHTML= prezzoOver;
    
} else {
    var prezzoBase = prezzoBase.toFixed(2);
    document.getElementById("prezzo").innerHTML= prezzoBase;
    document.getElementById("sconto").innerHTML= "Nessuno sconto applicato";
}


// stampo età e km di riepilogo
document.getElementById("eta").innerHTML= eta;
document.getElementById("km").innerHTML= km;

