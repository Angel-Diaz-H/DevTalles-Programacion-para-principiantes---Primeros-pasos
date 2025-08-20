//Strings.
let firstName: string = 'Angel';
let lastName: string = 'Díaz';

// console.log(firstName, lastName);
// Aquí ya no es necesario el tipado porque TS infiere el tipo de dato.
// Here is not necessary to type because TS infers the data type.
let fullName: string = firstName + ' ' + lastName;

console.log(fullName);

//Numbers
let number1: number = 10.5;
let number2: number = 20.3;

console.log(number1 + number2);

//Boolean
let isActive: boolean = true;
let isRunning: boolean = false;
let hasKids: boolean = true;

// Al estar entre comillas, isActive es un string y no un boolean.
// If it is between quotes, isActive is a string and not a boolean.
console.log('isActive', isActive);
console.log('isRunning', isRunning);
console.log('hasKids', hasKids);

// Intelligences son las sugerencias de cada IDE.