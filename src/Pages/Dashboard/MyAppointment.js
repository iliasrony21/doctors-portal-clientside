import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'

const MyAppointment = () => {
  const [user] = useAuthState(auth)
  const [appointments, setAppointments] = useState([])
  useEffect(() => {
    fetch(`http://localhost:5000/booking?patientEmail=${user.email}`)
      .then(res => res.json())
      .then(data => setAppointments(data))
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
