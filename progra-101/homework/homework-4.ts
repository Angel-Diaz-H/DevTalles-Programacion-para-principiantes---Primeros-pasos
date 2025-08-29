export let numbers: number[] = [1, 6, 8, 4, 2, 7, 10, 3, 5];
let numberMax: number = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > numberMax) {
        numberMax = numbers[i];
    }
}

console.log(numberMax);