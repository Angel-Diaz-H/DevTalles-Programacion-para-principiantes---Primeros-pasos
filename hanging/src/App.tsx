import {letters} from './helpers/letters'
import './App.css'
import { HangImage } from './components/HangImage'
import { useState } from 'react'

function App() {

  const [word] = useState('COMPUTADORA'); // CaseSensitive.
  const [hidenWord, setHidenWord] = useState('_ '.repeat(word.length));

  // Manejar el estado. El estado de las variables sirven para que modifiquen el HTML.
  // Una función. 
  const [attemps, setAttemps] = useState(0);
  
  /* Esta función no es muy común en React porque existen distintos tipos de funciones.
  function checkLetter(letter: string){

  }
  */

  const checkLetter = (letter: string) => {
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