import {letters} from './helpers/letters'
import './App.css'
import { HangImage } from './components/HangImage'
import { useState } from 'react'

function App() {

  const [word] = useState('WE'); // CaseSensitive.
  const [hidenWord] = useState('_ '.repeat(word.length));

  // Manejar el estado. El estado de las variables sirven para que modifiquen el HTML.
  // Una función. 
  const [attemps, setAttemps] = useState(0);
  
  /* Esta función no es muy común en React porque existen distintos tipos de funciones.
  function checkLetter(letter: string){

  }
  */

  const checkLetter = (letter: string) => {
    console.log(letter);
    setAttemps(Math.min(attemps + 1, 9));
  }

  return (
  <div  className="App">
    {/* Imágenes */}
    <HangImage imageNumber = {attemps} />

    {/* Palabra oculta */}
    <h3>_______________</h3>

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