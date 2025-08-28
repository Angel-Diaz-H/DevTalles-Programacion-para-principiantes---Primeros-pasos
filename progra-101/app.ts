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
        this.fuelTank = 0;
        this.isRunning = false;
        this.type = 'No type';
        this.createdAt = 123456789;
    }
}

// 🚗 Creamos un nuevo objeto (instancia) a partir de la clase Car
let myMazda = new Car();

// Mostramos el objeto completo
console.log(myMazda); // 👉 Es una instancia de la clase Car

// Accedemos a una propiedad específica del objeto
console.log(myMazda.brand); // 👉 "No brand"