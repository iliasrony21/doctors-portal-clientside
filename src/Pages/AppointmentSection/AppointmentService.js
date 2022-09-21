import React from 'react'

const AppointmentService = ({ service, setTreatments }) => {
  const { slots, name } = service
  return (
    <div>
      <div className='card w-96 bg-base-100 shadow-xl '>
        <div className='card-body'>
          <h2 className='card-title justify-center text-secondary'>{name}</h2>
          <p className='text-center'>
            {slots.length > 0 ? (
              <span>{slots[0]}</span>
            ) : (
              <span className='text-red-500'>Try another day</span>
            )}
          </p>
          <p className='text-center'>
            {slots.length} {slots.length > 1 ? 'spaces ' : 'space '}
            Available
          </p>
          <div className='card-actions justify-center '>
            <label
              htmlFor='booking-modal'
              className='btn btn-primary text-white'
              onClick={() => setTreatments(service)}
              disabled={slots.length === 0}
            >
              BOOk APPOINTMENT
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppointmentService
