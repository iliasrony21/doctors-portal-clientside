import React, { useState } from 'react'
import 'react-day-picker/dist/style.css'
import chair from '../../assets/images/chair.png'
import { format } from 'date-fns'
import { DayPicker } from 'react-day-picker'

const AppointmentBanner = ({ date, setDate }) => {
  // let footer = <p>Please pick a day.</p>
  // if (date) {
  //   footer = <p>You picked {format(date, 'PP')}</p>
  // }
  return (
    <div>
      <div className='hero min-h-screen '>
        <div className='hero-content flex-col lg:flex-row-reverse'>
          <img
            src={chair}
            className='max-w-lg rounded-lg shadow-2xl mx-5'
            alt='treatment chair'
          />
          <div className='mx-20'>
            <DayPicker
              mode='single'
              selected={date}
              onSelect={setDate}
              //   footer={footer}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppointmentBanner
