import { useState } from 'react'

import './App.css'
import LandingPage from './pages/home/LandingPage'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
      </Routes>
       
    </>
  )
}

export default App
