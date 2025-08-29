// Número mayor.
function max(a: number, b: number, c: number) {
    if (a > b && a > c) {
        return a;
    } else if (b > a && b > c) {
        return b;
    } else {
        return c;
    }
}

console.log('El número mayor es:', max(20, 40, 60));