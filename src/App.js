import './App.css'
import Navbar from './Shared/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import About from './Pages/About'
import Login from './Pages/Login/Login'
import Appointments from './Pages/AppointmentSection/Appointments'

function App () {
  return (
    <div className=''>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='login' element={<Login />} />
        <Route path='appointment' element={<Appointments />} />
      </Routes>
    </div>
  )
}

export default App
