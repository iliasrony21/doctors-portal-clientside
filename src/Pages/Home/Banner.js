import React from 'react'
import banner from '../../assets/images/chair.png'

const Banner = () => {
  return (
    <div className='hero min-h-screen '>
      <div className='hero-content flex-col lg:flex-row-reverse  '>
        <img src={banner} className='max-w-lg rounded-lg shadow-2xl ml-0' />
        <div>
          <h1 className='text-5xl font-bold'>
            Your new smile starts <br />
            Here
          </h1>
          <p className='py-6'>
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className='btn btn-primary uppercase bg-gradient-to-r from-secondary to-primary text-white'>
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}

export default Banner
