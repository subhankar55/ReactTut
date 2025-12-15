import { useState,useEffect } from 'react'

import './App.css'
import { ThemeProvider } from './context/Theme.js'
import ThemeBtn from './components/ThemeBtn.jsx'
import Card from './components/Card.jsx'


function App() {
  const [thememode, setTheme] = useState("light");
  const darkTheme = () => {
    setTheme("dark");
  };
  const lightTheme = () => {
    setTheme("light");
  };

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(thememode)
  }, [thememode]);
  return (
      <ThemeProvider value={{thememode, darkTheme, lightTheme}}>
        <div className="flex flex-wrap min-h-screen items-center">
            <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                      <ThemeBtn />
              </div>

              <div className="w-full max-w-sm mx-auto">
                      <Card />
              </div>
            </div>
        </div>
      </ThemeProvider>
  )
}

export default App
