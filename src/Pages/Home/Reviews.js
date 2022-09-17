import React from 'react'

const Reviews = ({ review }) => {
  return (
    <div>
      <div>
        <div className='card w-96 bg-base-100 shadow-xl ml-18 mr-18'>
          <div className='card-body'>
            <p>{review.description}</p>
            <div className='flex items-center '>
              <div>
                <img
                  className='w-20 rounded-full ring ring-primary mr-5 mt-2 '
                  src={review.img}
                  alt=''
                />
              </div>
              <div className=''>
                <h1>{review.name}</h1>
                <h1>{review.address}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reviews
