import React from 'react'
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'

const Appointment = () => {
  return (
    <section
      className='flex justify-center items-center mb-20'
      style={{
        background: `url(${appointment})`
      }}
    >
      <div className='flex-1 hidden lg:block'>
        <img className='mt-[-160px]' src={doctor} alt='' />
      </div>
      <div className='flex-1 '>
        <h1 className='text-xl text-primary mb-3'>Appointment</h1>
        <h1 className='text-3xl text-white'>Make an appointment Today</h1>
        <p className='text-white my-6'>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        <button className='btn btn-primary uppercase bg-gradient-to-r from-secondary to-primary text-white'>
          Get Started
        </button>
      </div>
    </section>
  )
}

export default Appointment
