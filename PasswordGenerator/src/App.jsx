import { useState, useCallback, useEffect, useRef } from 'react'

import './App.css'

function App() {
  // hook useState
  const [length, setlength] = useState(8)
  const [numAll,setnumAll] = useState(false)
  const [charAll,setcharAll] = useState(false)
  const [Password,setPassword] = useState('')
  // hook useRef
  // This is to take reference of the input field
  const passRef = useRef(null);
  // hook useCallback
  // call back hook optimize performance by memoizing functions when dependencies given as array change
  const generatePassword = useCallback(() =>{
      let pass = "";
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      if(numAll) str += "0123456789";
      if(charAll) str += "!@#$%^&*()_+~`|}{[]:;?><,./-=";

      for(let i = 1; i <= length; i++){
        // random function generate random floating point values between [0, 1)
        let char = Math.floor(Math.random() * str.length + 1);
        pass += str.charAt(char);
      }
      setPassword(pass);
  } , [length,numAll,charAll,setPassword])
  
  // function copy to clipboard
  const copyToClipboard = useCallback(() => {
    // This is to select the text inside the input field
    passRef.current.select();
    window.navigator.clipboard.writeText(Password);
  },[Password]);
  // hook useEffect
  // use effect do the call operation everytime when any dependency provided in array changes
  useEffect(generatePassword,[length,numAll,charAll,setPassword]);

  return (
    <>
      <div className='w-full max-w-[50%] h-[80vh] mx-auto my-17 shadow-lg rounded-md px-4 py-1 bg-gray-600'>
        <h1 className='text-white text-center my-20 text-xl'>Password Generator</h1>  
        <div className='flex shadow bg-gray-100 rounded-md overflow-hidden mb-4 my-5 max-w-[50%] mx-auto'>        
          <input 
          type="text" 
          value={Password}
          className='outline-none text-center text-gray-800 w-full py-2 px-3'
          placeholder='password'
          readOnly
          ref={passRef}
          />
          <button onClick={copyToClipboard} className='outline-none bg-blue-700 text-white px-5 py-4 shrink-0 rounded-r-md'>copy</button>
        </div>
        <div className='flex text-sm gap-x-2 justify-center'>
          <div className='flex items-center gap-x-1 text-white'>
          <input 
          type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e) => {setlength(e.target.value)}}
          />
          <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1 text-white'>
          <input 
          type="checkbox"
          defaultChecked={numAll}
          id='num'
          onChange={() => {setnumAll(prev => !prev)}}
          />
          <label htmlFor='num'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1 text-white'>
          <input 
          type="checkbox"
          defaultChecked={charAll}
          id='char'
          onChange={() => {setcharAll(prev => !prev)}}
          />
          <label htmlFor='char'>Characters</label>
          </div>
        </div> 
        
      </div>
      
       
    </>
  )
}

export default App
