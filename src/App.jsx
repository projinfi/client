import './App.css'
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import ResetPass from './pages/ResetPass';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SetNewPassword from './pages/SetNewPassword';
import Home from './pages/Home';
import ProtectedRoutes from './routes/ProtectedRoutes';
import Navbar from './components/Navbar';
import Cart from './pages/Cart';
import Settings from './pages/Settings';


function App() {
 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<SignUp />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/resetpassword' element={<ResetPass />} />
          <Route path='/users/verifyResetToken' element={<SetNewPassword />} />
          {/* <Route path='/cart' element={<ProtectedRoutes element={Cart}/>}/> */}
          <Route path='/cart' element={<Cart/>} />
          <Route path='/settings' element={<Settings/>} />
          <Route path='/' element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
