import React from 'react'
import './App.css'

import UserContextProvider from './context/UserContextProvider.jsx';
import Profile from './components/Profile.jsx';
import Login from './components/Login.jsx';

function App() {

  return (
      <UserContextProvider>
        <h1>React with Chai</h1>
        <Login />
        <Profile />
      </UserContextProvider>
  )
}

export default App
