import {letters} from './helpers/letters'
import './App.css'
import { HangImage } from './components/HangImage'
import { useEffect, useState } from 'react'
import { getRandomWord } from './helpers/getRandomWord';

function App() {

  const [word] = useState(getRandomWord()); // CaseSensitive.
  const [hidenWord, setHidenWord] = useState('_ '.repeat(word.length));

  // Manejar el estado. El estado de las variables sirven para que modifiquen el HTML.
  // Una función. 
  const [attemps, setAttemps] = useState(0);

  // Efecto en React me ayuda a disparar acciones cuando algo sucede.
  const [lose, setLose] = useState(false);
  const [won, setWon] = useState(false);

  // Hooks.
  // Determinar si la persona perdió o no.
  useEffect(() => {
    if(attemps >= 9) {
      setLose(true);
    }
  }, [attemps]);

  // Determinar si la persona ganó.
  useEffect(() => {
    const currentHiddenWord = hidenWord.split(' ').join('');
    if (currentHiddenWord === word) {
      setWon(true);
    }
  }, [hidenWord]);

  /* Esta función no es muy común en React porque existen distintos tipos de funciones.
  function checkLetter(letter: string){

  }
  */

  const checkLetter = (letter: string) => {

    if (lose) return;

    if (!word.includes(letter)) {
      setAttemps(Math.min(attemps + 1, 9));
      return;
    }

    const hiddenWordArray = hidenWord.split(' ');

    for (let i = 0; i < word.length; i++) {
      if(word[i] === letter) {
        hiddenWordArray[i] = letter;
      }
    }

    setHidenWord(hiddenWordArray.join(' '))
  }

  return (
  <div  className="App">
    {/* Imágenes */}
    <HangImage imageNumber = {attemps} />

    {/* Palabra oculta */}
    <h3>{hidenWord}</h3>

    {/* Contador de intentos. */}
    <h3>Intentos: {attemps}</h3>
    
    {/* Mensaje si perdió */}
    {
      (lose)
      ? <h2>¡Perdió el juego!</h2>
      : ''
    }

    {/* Mensaje si ganó */}
    {
      (won)
      ? <h2>¡Felicidades, ganó el juego!</h2>
      : ''
    }
    
    {/* Botones de letras. */}
    {
      letters.map((letter) => (
        <button
        onClick = { () => checkLetter (letter)}
          key = {letter}>
            {letter}</button>
      ))
    }
  </div>
  )
}

export default App