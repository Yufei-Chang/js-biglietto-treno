// FASE 1, RICHIEDERE DATI
const tripDistance = prompt("Quanto è lungo il tragitto?");
console.log(tripDistance);
// Number(tripDistance); NON FUNZIONA, DOMANDARE DOMATTINA A LEZIONE
const userAge = prompt('Quanti anni hai?')
console.log(userAge);

// FASE 2, CALCOLARE SCONTISTICHE
const ticketPrice = tripDistance * 0.21;
console.log(ticketPrice);
const minorDiscount = ticketPrice / 100 * 20;
console.log(minorDiscount);
const elderDiscount = ticketPrice / 100 * 40;
console.log(elderDiscount);

// FASE 3, APPLICARE PREZZI SCONTATI
const minorPrice = ticketPrice - minorDiscount;
console.log(minorPrice);
const elderPrice = ticketPrice - elderDiscount;
console.log(elderPrice);

// FASE 4, WHAT IF?
let result;

if (userAge < 18) {
    console.log('Il prezzo del tuo biglietto è di €' + minorPrice.toFixed(2));
} else if (userAge >= 65) {
    console.log('Il prezzo del tuo biglietto è di €' + elderPrice.toFixed(2));
} else {
    console.log('Il prezzo del tuo biglietto è di €' + ticketPrice.toFixed(2));
}