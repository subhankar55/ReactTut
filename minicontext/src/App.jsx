import { useState } from 'react'

import './App.css'

import UserContextProvider from './context/UserContextProvider.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UserContextProvider>
        <h1>React with Chai</h1>
      </UserContextProvider>
    </>
  )
}

export default App
