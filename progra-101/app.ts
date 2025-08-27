export function greet (name: string = 'Mundo') {
    console.log('Hello,', name, '!');
}

// Se puede indicar explícitamente el tipo de dato que retorna.
// Se puede definir un valor predeterminado a los parámetros.
function addTwoNumbers(num1: number, num2: number) {
    return num1 + num2;
}

let total: number = addTwoNumbers(10, 20);

console.log('Total: ', total);