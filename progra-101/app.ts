// Programación Orientada a Objectos.
// Son abstracciones de cosas en la vida real.

// Interface y Clase.
// Cuando utilizamos un objecto decimos que LUCE como el interface (una persona).
// Al crear una instancia de una clase se definen las propiedades automáticamente, a diferencia de la interfaz.
// Las interfaces no sirven para crear instancias.
// La interfaz sirve solo para saber cómo lucen los objectos.
class Car {
    brand: string;
    doors: number;
    fuelTank: number;
    isRunning: boolean;
    type: string;

    createdAt: number;

    // Constructor es una función dentro de una clase.
    constructor() {
        this.brand = 'No brand';
        this.doors = 0;
        this.fuelTank = 0;
        this.isRunning = false;
        this.type = 'No type';
        this.createdAt = 123456789;
    }
}

let myMazda = new Car();

console.log(myMazda); // Es una instancia de un carro.
console.log(myMazda.brand);