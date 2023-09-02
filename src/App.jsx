import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Pages/Header'
import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Footer from './Pages/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/footer' element={<Footer/>} />
      </Routes>
    
    </BrowserRouter>
  )
}

export default App
