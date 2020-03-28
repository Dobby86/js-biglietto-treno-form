

//chiedere nome e cognome
var urName = document.getElementById("name");

// chiedere km da percorrere
var urKm = document.getElementById("km");

//chiedere eta
var urAge = document.getElementById("eta");
// bottone per generare  i dati con genera
var bottoneGenerator = document.getElementById("genera");

 bottoneGenerator.addEventListener("click",

    function() {
    var putName = urName.value;
    var putKm = urKm.value;
    var putAge = urAge.value;
    var stampoPrimo = document.getElementById("passeggero");
    var stampoSecondo = document.getElementById("");
    //prezzo
    var stampoTerzo = document.getElementById("prezzo");
    stampoPrimo.innerHTML = putName;
    //offerta
    var

    console.log(putName, putKm, putAge);
}
);
// bottone per generare  i dati con cancella
var bottoneDelete = document.getElementById("cancella");
 bottoneDelete.addEventListener("click",
    function() {
    var putName = "";
    var putKm = "";
    var putAge = "";
    //logghiamoli
    console.log(putAge, putKm, putName);
}
);

//ora bisogna far stampare sul biglietto i dati raccolti
