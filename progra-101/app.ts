// 📌 Programación Orientada a Objetos (POO)
// La POO nos permite representar cosas de la vida real mediante clases y objetos.
// Una clase es como un molde o plantilla, mientras que un objeto es la instancia real de esa clase.

// 🔹 Interfaces y Clases
// - Una interfaz define cómo debe "lucir" un objeto (sus propiedades y tipos).
// - Una clase, en cambio, puede usarse para crear instancias reales con valores y comportamientos.
// - IMPORTANTE: las interfaces NO generan objetos, solo sirven como contrato o guía de estructura.
// - Las clases SÍ pueden generar objetos (instancias).

class Car {
    brand: string;
    doors: number;
    fuelTank: number;
    isRunning: boolean;
    type: string;
    createdAt: number;

    // 🔹 El constructor
    // Es una función especial dentro de la clase.
    // Se ejecuta automáticamente cuando se crea un nuevo objeto (instancia).
    // Aquí se inicializan los valores por defecto de la clase.
    constructor() {
        this.brand = 'No brand';
        this.doors = 0;
        this.fuelTank = 100;
        this.isRunning = false;
        this.type = 'No type';
        this.createdAt = 123456789;
    }

    turnOn() {
        if(this.isRunning) {
            console.log('El carro ya estaba encendido, se dañó el motor.');
            return; // Detiene la ejecución del método.
        }

        if (this.fuelTank <= 0) {
            console.log('El carro no tiene gasolina.');
            return;
        }

        this.isRunning = true;
        console.log("El carro está encendido.");
    }
}

// 🚗 Creamos un nuevo objeto (instancia) a partir de la clase Car
let myMazda = new Car();

// Mostramos el objeto completo
console.log(myMazda); // Inició apagado.
myMazda.turnOn(); // El método encendió el carro.
console.log(myMazda); //