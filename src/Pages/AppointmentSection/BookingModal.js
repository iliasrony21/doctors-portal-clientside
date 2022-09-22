import React from 'react'
import { format } from 'date-fns'

const BookingModal = ({ date, treatments, setTreatments }) => {
  const { _id, name, slots } = treatments

  const handleAppointment = event => {
    event.preventDefault()
    const slot = event.target.slot.value
    console.log(_id, name, slot)
    setTreatments(null)
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
              {slots.map(slot => (
                <option value={slot}>{slot}</option>
              ))}
            </select>
            <input
              type='text'
              name='name'
              placeholder='Full name'
              className='input input-bordered w-full max-w-lg'
            />
            <input
              type='text'
              name='phone'
              placeholder='Phone number'
              className='input input-bordered w-full max-w-lg'
            />
            <input
              type='email'
              name='email'
              placeholder='Email'
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
