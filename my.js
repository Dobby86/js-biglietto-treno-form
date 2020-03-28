

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
    putName = urName.value;
    putKm = urKm.value;
    putAge = urAge.value;
    console.log(putAge, putKm, putName);
}
);
// bottone per generare  i dati con cancella
var bottoneDelete = document.getElementById("cancella");
 bottoneDelete.addEventListener("click",
    function() {
    putName = "";
    putKm = "";
    putAge = "";
    console.log(putAge, putKm, putName);
}
);

//ora bisogna far stampare sul biglietto i dati raccolti
document.getElementById("passeggero").innerHTML= ;
console.log(urName);
