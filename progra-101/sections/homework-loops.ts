// Tabla de multiplicar del 10.

export let base:number = 10;
export let limit:number = 50;

for (let i:number = 1; i <= limit; i++) {
    console.log(i, " x ", base, " = ", i*base);
}