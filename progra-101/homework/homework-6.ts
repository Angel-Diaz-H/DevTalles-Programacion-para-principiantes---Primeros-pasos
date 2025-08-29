for (let i: number = 1; i <= 5; i++) {
    let line = "";

    for (let j = 1; j <= 5; j++) {
        // Interpolación de strings.
        // Backtick.
        line += ` ${ i * j}`;
    }

    console.log(line);
}