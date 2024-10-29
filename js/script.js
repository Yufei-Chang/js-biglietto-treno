// FASE 1, RICHIEDERE DATI
const tripDistance = prompt("Quanto è lungo il tragitto?");
// Number(tripDistance); NON FUNZIONA, DOMANDARE DOMATTINA A LEZIONE
const userAge = prompt('Quanti anni hai?')

const tripDistanceNum = parseInt(tripDistance);
const userAgeNum = parseInt(userAge);


// FASE 2, CALCOLARE SCONTISTICHE
const ticketPrice = tripDistanceNum * 0.21;
const minorDiscount = ticketPrice / 100 * 20;
const elderDiscount = ticketPrice / 100 * 40;
console.log('Il prezzo del biglietto intero è ${ticketPrice}');

// FASE 3, APPLICARE PREZZI SCONTATI
const minorPrice = ticketPrice - minorDiscount;
const elderPrice = ticketPrice - elderDiscount;

// FASE 4, WHAT IF?
let result;

if (userAge < 18) { 
    result = minorPrice
} else if (userAge >= 65) {
    result = elderPrice
} else {
    result = ticketPrice;
}

console.log("Il prezzo finale della tua corsa è di € ${result}");

