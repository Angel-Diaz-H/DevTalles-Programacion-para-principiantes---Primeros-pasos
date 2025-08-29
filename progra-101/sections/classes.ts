// 📌 Programación Orientada a Objetos (POO)
// La POO nos permite representar cosas de la vida real mediante clases y objetos.
// Una clase es como un molde o plantilla, mientras que un objeto es la instancia real de esa clase.

// 🔹 Interfaces y Clases
// - Una interfaz define cómo debe "lucir" un objeto (sus propiedades y tipos).
// - Una clase, en cambio, puede usarse para crear instancias reales con valores y comportamientos.
// - IMPORTANTE: las interfaces NO generan objetos, solo sirven como contrato o guía de estructura.
// - Las clases SÍ pueden generar objetos (instancias).

class Car {
    // Si no se especifican van a ser públicas.
    // static son de forma global, se usan en casos muy específicos.
    readonly brand: string;
    public doors: number;
    public fuelTank: number;
    public isRunning: boolean;
    public type: string;
    
    private readonly createdAt: number;

    // 🔹 El constructor
    // Es una función especial dentro de la clase.
    // Se ejecuta automáticamente cuando se crea un nuevo objeto (instancia).
    // Aquí se inicializan los valores por defecto de la clase.
    // Solo aquí se pueden editar las propiedades.
    constructor(brand: string, type: string) {
        this.brand = brand; //el = brand es el argumento que pedimos, no tiene que ser igual al this.brand
        this.doors = 0;
        this.fuelTank = 0;
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

    /*
        gas: number.
        gas > 100, this.fillTank = 100
        gas tiene positivo.
        si ya está lleno, no sobre llenar.
        si el tanque es 50 y añado 20, el valor de fillTank sería 70.
        si 
    */
    fillTank (gas: number) {
        let gasActual = this.fuelTank;
        console.log('El estado inicial del tanque es:', gasActual);
        if (gasActual + gas > 100) {
            console.log("La cantidad ingresada es mayor a lo permitido.");
            return;
        }

        if (gas <= 0 || gas > 100) {
            console.log("El valor debe ser una cantidad válida.");
            return;
        }

        gas = this.fuelTank + gas;
        console.log('El estado actual del tanque es:', gas);
        return;
    }
}

export let myMazda = new Car('Mazda', 'Sedan'); 
// myMazda.brand = 'Honda'; // ya no se puede cambiar el valor si lo definimos con readonly.
// myMazda.createdAt = 1234 // error porque es readonly y no puedo cambiarlo.
// console.log(myMazda.createdAt)

console.log(myMazda);
myMazda.fillTank(80);