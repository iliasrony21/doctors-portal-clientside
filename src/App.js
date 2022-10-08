import './App.css'
import Navbar from './Shared/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import About from './Pages/About'
import Login from './Pages/Login/Login'
import Appointments from './Pages/AppointmentSection/Appointments'
import SignUp from './Pages/Login/SignUp'
import RequireAuth from './Pages/Login/RequireAuth'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Dashboard from './Pages/Dashboard/Dashboard'
import MyAppointment from './Pages/Dashboard/MyAppointment'
import MyReview from './Pages/Dashboard/MyReview'
import Users from './Pages/Dashboard/Users'
import RequireAdmin from './Pages/Login/RequireAdmin'
import AddDoctor from './Pages/Dashboard/AddDoctor'

function App () {
  return (
    <div className=''>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<SignUp />} />
        <Route
          path='appointment'
          element={
            <RequireAuth>
              <Appointments />
            </RequireAuth>
          }
        />
        <Route
          path='dashboard'
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyAppointment></MyAppointment>}></Route>
          <Route path='review' element={<MyReview></MyReview>} />
          <Route
            path='user'
            element={
              <RequireAdmin>
                <Users></Users>
              </RequireAdmin>
            }
          />
          <Route
            path='addDoctor'
            element={
              <RequireAdmin>
                <AddDoctor></AddDoctor>
              </RequireAdmin>
            }
          />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App
