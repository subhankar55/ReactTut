import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)
  // let counter = 15;
  const addvalue = ()=> {
    console.log("Button clicked",counter);
    setCounter(counter + 1);
    // counter = counter + 1;
  }
  const Removevalue = ()=> {
    console.log("Button clicked",counter);
    if (counter <= 1) {
      setCounter(0);
    }
    else setCounter(counter - 1);
    // counter = counter - 1;
  }
  return (
    <>
      <h1>Chai aur code</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addvalue}>Add value : {counter}</button>
      <br />
      <button onClick={Removevalue}>Remove value : {counter} </button>
      <p>Footer : {counter}</p>
    </>
  )
}

export default App
