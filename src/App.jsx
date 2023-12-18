import { Login, Home, Signup, Catscreen, NewCatPage, UserPage, EditUser, Signup } from './pages/indexpages'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/cats/:id' element={<Catscreen />} />
        <Route path='/cats/new' element={<NewCatPage />} />
        <Route path='/users/:id' element={<UserPage />} />
        <Route path='/users/edit' element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
