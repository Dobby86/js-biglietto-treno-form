// DESCRIZIONE:
// Creo una versione dell’EX del biglietto del treno ricca con un bell’output dinamico;
// Sulla base di quello visto insieme in aula, ma non per forza identico;
// L’importante è usare eventi sui 2 bottoni principali, e sviluppare le logiche che sottendono;
// “Genera” mi calcolerà il prezzo del biglietto a partire dai dati inseriti negli input, e mi draà l’output in pagina, nel modo migliore possibile;
// “Annulla” mi fa tornare allo stato iniziale con output pulito (o nascosto) e campi puliti (non vale fare refresh del browser

//chiedere nome e cognome
var urName = document.getElementById("name");

//chiedere km da percorrere
var urKm = document.getElementById("km");

//chiedere eta
var urAge = document.getElementById("eta");
// bottoni per generare  i dati con button
var bottoneGenerator = document.getElementById("genera");

 bottoneGenerator.addEventListener("click",

    function() {
    putName = urName.value;
    putKm = urKm.value;
    putAge = urAge.value;
    console.log(putAge, putKm, putName);
}
);

var bottoneDelete = document.getElementById("cancella");
 bottoneDelete.addEventListener("click",
    function() {
    putName = "";
    putKm = "";
    putAge = "";
    console.log(putAge, putKm, putName);
}
);
