import { useState } from 'react'
import { Login, Home,Cadastro, Catscreen, NewCatPage, UserPage, EditUser } from './pages/indexpages'
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
        <Route path='/cats/new' element={<NewCatPage />} />
        <Route path='/users/:id' element={<UserPage />} />
        <Route path='/users/edit' element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
