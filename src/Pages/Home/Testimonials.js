import React from 'react'
import quote from '../../assets/icons/quote.svg'
import person1 from '../../assets/images/people1.png'
import person2 from '../../assets/images/people2.png'
import person3 from '../../assets/images/people3.png'
import Reviews from './Reviews'

const Testimonials = () => {
  const reviews = [
    {
      _id: 1,
      name: 'Winson Herry',
      address: 'California',
      description:
        'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
      img: person1
    },
    {
      _id: 2,
      name: 'Deepika padukon',
      address: 'California',
      description:
        'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
      img: person2
    },
    {
      _id: 3,
      name: 'Alexa thomas',
      address: 'California',
      description:
        'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
      img: person3
    }
  ]
  return (
    <div>
      <div className='flex justify-between px-12'>
        <div>
          <h1 className='text-primary font-bold'>Testimonial</h1>
          <h1 className='text-3xl'>What our patients says</h1>
        </div>
        <div>
          <img className='w-48' src={quote} alt='' />
        </div>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-14 py-8'>
        {reviews.map(review => (
          <Reviews key={review._id} review={review}></Reviews>
        ))}
      </div>
    </div>
  )
}

export default Testimonials
