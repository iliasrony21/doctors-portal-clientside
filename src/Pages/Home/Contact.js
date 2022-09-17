import React from 'react'
import appointment from '../../assets/images/appointment.png'

const Contact = () => {
  return (
    <section
      className='mt-40'
      style={{
        background: `url(${appointment})`
      }}
    >
      <div className='grid auto-rows-auto '>
        <h1 className='text-xl text-primary font-bold text-center mt-20 mb-3'>
          Contact Us
        </h1>
        <h1 className='text-4xl text-white text-center mb-10'>
          Stay connected with us
        </h1>
        <div className='  grid grid-rows-3 justify-center'>
          <input
            type='text'
            placeholder='Email Address'
            className='input w-96 '
          />

          <input
            type='text'
            placeholder='Subject'
            className='input w-full w-96 mt-[-18px] '
          />

          <textarea
            className='textarea h-32 mt-[-38px]  mb-2'
            placeholder='Your message'
          ></textarea>
        </div>
      </div>
      <div className='grid justify-center items-center pb-20'>
        <button className=' btn btn-primary uppercase bg-gradient-to-r from-secondary to-primary text-white w-32  mt-5'>
          Submit
        </button>
      </div>
    </section>
  )
}

export default Contact
