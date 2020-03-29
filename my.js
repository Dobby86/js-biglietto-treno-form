

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
    //stampo nome
    var stampoPrimo = document.getElementById("passeggero");
        stampoPrimo.innerHTML = putName;
//random carrozza
        var carrozza = document.getElementById("carrozza");
        carrozza.innerHTML = Math.floor((Math.random("a caso")* 30) );

//
    var stampoSecondo = document.getElementById("prezzo");
    stampoSecondo.innerHTML= urKm.value;

    if (urKm.value <200) {
        stampoSecondo.innerHTML= (offerta * urKm)/100;

    }
    //offerta
    var offerta = document.getElementById("offerta");
    offerta.innerHTML= urAge.value;
    if (urAge.value <= 18) {
        offerta.innerHTML = "sconto10%";
    }else if (urAge.value > 55) {
        offerta.innerHTML = "sconto15%";
    }else {
        offerta.innerHTML = "prezzo standard";
    }
    //

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
