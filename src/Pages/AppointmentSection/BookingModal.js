import React from 'react'
import { format } from 'date-fns'
import auth from '../../firebase.init'
import { useAuthState } from 'react-firebase-hooks/auth'
import { toast } from 'react-toastify'

const BookingModal = ({ date, treatments, setTreatments, refetch }) => {
  const { _id, name, slots } = treatments
  const [user, loading, error] = useAuthState(auth)

  const formattedDate = format(date, 'PP')

  const handleAppointment = event => {
    event.preventDefault()
    const slot = event.target.slot.value
    const booking = {
      treatmentId: _id,
      treatment: name,
      date: formattedDate,
      slot,
      patientEmail: user.email,
      patient: user.displayName,
      phone: event.target.phone.value
    }
    fetch('http://localhost:5000/booking', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(booking)
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          toast(`Appointment successfully on ${formattedDate} at ${slot}`)
        } else {
          toast.error(
            `You already have an Appointment on ${data.booking?.date} at ${data.booking?.slot}`
          )
        }
        refetch()
        setTreatments(null)
      })
  }
  return (
    <div>
      <input type='checkbox' id='booking-modal' className='modal-toggle' />
      <div className='modal modal-bottom sm:modal-middle'>
        <div className='modal-box'>
          <label
            htmlFor='booking-modal'
            className='btn btn-sm btn-circle absolute right-2 top-2'
          >
            ✕
          </label>
          <h3 className='font-bold text-lg'>{name}</h3>
          <form
            onSubmit={handleAppointment}
            className='grid grid-cols-1 gap-3 justify-items-center mt-8'
          >
            <input
              type='text'
              value={format(date, 'PP')}
              disabled
              className='input input-bordered w-full max-w-lg'
            />
            <select
              name='slot'
              className='select select-bordered w-full max-w-lg '
            >
              {slots.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type='text'
              name='name'
              disabled
              value={user?.displayName || ''}
              className='input input-bordered w-full max-w-lg'
            />
            <input
              type='email'
              name='email'
              disabled
              value={user?.email || ''}
              className='input input-bordered w-full max-w-lg'
            />
            <input
              type='text'
              name='phone'
              placeholder='Phone number'
              className='input input-bordered w-full max-w-lg'
            />

            <input
              type='submit'
              value='Submit'
              className='btn btn-accent w-full max-w-lg'
            />
          </form>
        </div>
      </div>
    </div>
  )
}

export default BookingModal
