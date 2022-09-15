import React from 'react'
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import Service from './Service'
import treatment from '../../assets/images/treatment.png'

const Services = () => {
  const services = [
    {
      _id: 1,
      name: 'Fluoride Treatment',
      description:
        'fluoride treatment is very important for yours.Come to us and we will give you the perfect treatment',
      img: fluoride
    },
    {
      _id: 2,
      name: 'Cavity Filling',
      description:
        'Cavity Filling is very important for yours Come to us and we will give you the perfect treatment',
      img: cavity
    },
    {
      _id: 3,
      name: 'Teeth Whitening',
      description:
        'Teeth Whitening is very important for yours Come to us and we will give you the perfect treatment',
      img: whitening
    }
  ]
  return (
    <div>
      <div className='my-28 text-center'>
        <h2 className='text-secondary text-center font-bold my-2'>
          OUR SERVICES
        </h2>
        <h1 className='text-3xl'>Services We Provided</h1>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 px-12'>
        {services.map(service => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
      <div className='hero min-h-screen mb-40'>
        <div className='hero-content flex-col lg:flex-row'>
          <img src={treatment} className='max-w-sm rounded-lg shadow-2xl' />
          <div className='px-20'>
            <h1 className='text-5xl font-bold'>
              Exceptional Dental <br /> Care, on Your Terms
            </h1>
            <p className='py-6  indent'>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <button className='btn btn-primary bg-gradient-to-r from-secondary to-primary text-white'>
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
