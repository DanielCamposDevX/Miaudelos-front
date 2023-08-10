import { useState } from 'react'
import { Login, Home,Cadastro, Catscreen } from './pages/indexpages'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/cadastro' element={<Cadastro />} />
        <Route path='/cats/:id' element={<Catscreen />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
