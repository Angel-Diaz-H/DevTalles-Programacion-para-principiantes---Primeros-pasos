console.log("Hola Mundo!");

/*
let isTired:boolean = false;

// En Javascript se utiliza triple símbolo de igual para validarlo.
if (isTired) {
    console.log("Tomar café");
} else{
    console.log("Tomar agua");
}
*/

// If-else anidado.
// No se recomienda usar más de un if-else anidado
/*
let grade:number = 90;
if (grade >= 60) {
    console.log("El alumno aprueba la clase.");
} else {
    if (grade >= 50) {
        console.log("Por favor estude más!");
    } else {
        console.log("El alumno NO aprueba la clase");
    }
}
*/

// Alternativa con else if.
export let grade:number = 20;

if (grade >= 60) {
    console.log("El almuno aprueba la clase.");
} else if (grade > 50) {
    console.log("Por favor, estudie más!");
} else {
    console.log("El alumno NO aprueba la clase");
}

console.log("Fin del programa");