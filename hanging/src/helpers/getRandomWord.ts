// Es un archivo TS porque quiero que sea una función normal y corriente, y no quiero que sea un componente TSX de React.

let words: string[] = [
    'COMPUTADORA',
    'LINUX',
    'ALVARO',
    'YEGUA',
    'OREO',
    'PETROLEO',
    'UBUNTU',
    'DINAMARCA',
    'CREATINA',
    'CHRISTIAN',
    'SERPIENTE',
    'GUANAJUATO'
]

export function getRandomWord () {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}