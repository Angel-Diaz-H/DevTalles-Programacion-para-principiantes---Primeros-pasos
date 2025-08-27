// Objetos literales.
// Los métodos son funciones que se encuentran dentro de un objecto y pueden recibir parámetros.
let person = {
    name: 'Carolina',
    age: 30,
    isActive: true,
    hobbies: [
        'soccer',
        'programming'
    ],
    toString () {
        // this hace referencia al mismo objecto.
        let objectString = this.name + ' ' + this.age;
        console.log(objectString);
    }
}

// Un objeto tiene un arreglo. En la posición [1] (2) tiene 11 dígitos, contando con el método length
console.log(person.hobbies[1].length);
console.log(person.name.toUpperCase());
person.toString();