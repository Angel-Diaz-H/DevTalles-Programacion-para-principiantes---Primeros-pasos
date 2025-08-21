export let weekday:number = -1; // 1 = lunes, 2 = martes...

if (weekday <= 0) {
    throw new Error('Día de la semana no permitido.');
}

// Después de la palabra switch viene la palabra reservada case.
switch (weekday) {
    case 1:
        console.log("Es lunes.");
        break;
    case 2:
        console.log("Es martes.");
        break;
    case 3:
        console.log("Es miércoles.");
        break;
    default:
        console.log("No es lunes, martes o miércoles");
        break;
}