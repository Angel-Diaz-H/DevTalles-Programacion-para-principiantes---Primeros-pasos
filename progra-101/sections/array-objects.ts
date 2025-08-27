// Clases / interfaces utilizan CamelCase.
// Las arreglos es una colección de objectos o variables que lucen similares.
export interface Person {
    name: string;
    age:number;
    isActive: boolean;
    // Se puede incluir objectos.
}

let fernando: Person = {
    name: 'Fernando',
    age: 36,
    isActive: true
};

let andrea: Person = {
    name: 'Andrea',
    isActive: true,
    age: 28
};

let fatima: Person = {
    name: 'Fátima',
    age: 30,
    isActive: false
};

// Detecta que es una lista de tipo Person.
let people: Person[] = [fernando, andrea, fatima];

// Existen muchos objectos para barrer listas.
//console.log(people);

for (let i = 0; i < people.length; i++) {
    console.log(people[i].name + ' tiene ' + people[i].age);
}