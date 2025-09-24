import { useState } from 'react'
import './App.css'
import { Route } from 'react-router'
import { Routes } from 'react-router'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx' 
import Hello from './pages/Hello.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (

<Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/hello/:nombre" element={<Hello/>}> </Route> 
</Routes>
      )
}

export default App
