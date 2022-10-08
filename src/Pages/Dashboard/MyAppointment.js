import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'
import auth from '../../firebase.init'

const MyAppointment = () => {
  const [user] = useAuthState(auth)
  const navigate = useNavigate()
  const [appointments, setAppointments] = useState([])
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/booking?patientEmail=${user.email}`, {
        method: 'GET',
        headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
      })
        .then(res => {
          console.log('res', res)
          if (res.status === 401 || res.status === 403) {
            navigate('/')
          }
          return res.json()
        })
        .then(data => {
          setAppointments(data)
        })
    }
  }, [user])
  return (
    <div>
      <h1 className='text-xl text-center mt-5 mb-5 text-purple-700'>
        You have {appointments.length} appointments{' '}
      </h1>
      <div className='overflow-x-auto'>
        <table className='table w-full'>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Treatment</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((a, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{user.email}</td>
                <td>{a.date}</td>
                <td>{a.slot}</td>
                <td>{a.treatment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MyAppointment
