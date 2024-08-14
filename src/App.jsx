import { useState } from 'react'
import './App.css'
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import ResetPass from './pages/ResetPass';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import SetNewPassword from './pages/SetNewPassword';

function App() {
 
  return (
    <>
 
    <BrowserRouter>
    <Routes>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/' element={<SignIn/>}/>
      <Route path='/resetpassword' element={<ResetPass/>}/>
      <Route path='/updatepassword' element={<SetNewPassword/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
