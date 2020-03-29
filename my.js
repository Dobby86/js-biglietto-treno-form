

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
        carrozza.innerHTML = Math.floor((Math.random("a caso") * (100-30)) );

        //random cp

        var randomCp=document.getElementById("cp");
        randomCp.innerHTML= Math.floor((Math.random("a caso") * (10000-3000)+100) );


//
    var stampoSecondo = document.getElementById("prezzo");
    stampoSecondo.innerHTML= urKm.value;

    if (urAge.value <= 18) {

        stampoSecondo.innerHTML= "euro " + (urKm.value  - ((10 * urKm.value)/100));
    }else if (urAge.value > 55) {
        stampoSecondo.innerHTML= "euro " + (urKm.value  - ((15 * urKm.value)/100));
    }else {
        stampoSecondo.innerHTML= "euro " + (1 * urKm.value);

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
