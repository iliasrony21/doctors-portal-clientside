import React from 'react'

const InfoCard = ({ img, cardTitle, bgClass }) => {
  return (
    <div>
      <div
        className={`card lg:card-side ml-4 mr-4 shadow-xl bg-primary ${bgClass}`}
      >
        <figure>
          <img className='ml-5' src={img} alt='Album' />
        </figure>
        <div className='card-body '>
          <h2 className='card-title text-white'>{cardTitle}</h2>
          <p className='text-white'>
            Time is very important.Our opening hour is here.
          </p>
        </div>
      </div>
    </div>
  )
}

export default InfoCard
