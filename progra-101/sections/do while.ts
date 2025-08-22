/*export let gasTank = 0;

while (gasTank > 0) {
    console.log("Gasolina restante: ", gasTank);
    gasTank--;
}

console.log("No hay gasolina");
*/

// Con Do While.
// La diferencia radica que en se ejecutará al menos una vez.

let gasTank = 50;

do {
    console.log("Gasolina restante: ", gasTank);
    gasTank--;
} while (gasTank > 0)
    
console.log("No hay gasolina");