import React from 'react'

const Service = ({ service }) => {
  return (
    <div>
      <div className='card card-compact w-96 bg-base-100 shadow-2xl'>
        <figure>
          <img src={service.img} alt='Shoes' />
        </figure>
        <div className='card-body text-center items-center '>
          <h2 className='card-title '>{service.name}</h2>
          <p>{service.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Service
