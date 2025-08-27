export function multiplication (base: number, limit: number = 10) {

    if (limit <= 0) {
        // new genera instancias.
        throw new Error('El límite debe ser mayor a cero.');
    }
    // También se puede invertir el valor para que no ingrese valores negativos.

    for (let i = 1; i <= limit; i++) {
        console.log(base, " x ", i, " = ", i*base);
    }
}