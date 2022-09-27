import { format } from 'date-fns'
import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import Loading from '../../Shared/Loading'
import AppointmentService from './AppointmentService'
import BookingModal from './BookingModal'

const AvailableAppointment = ({ date }) => {
  // const [services, setServices] = useState([])
  const [treatments, setTreatments] = useState(null)

  const formattedDate = format(date, 'PP')
  const { isLoading, data: services, refetch } = useQuery(
    ['available', formattedDate],
    () =>
      fetch(`http://localhost:5000/available?date=${formattedDate}`).then(res =>
        res.json()
      )
  )

  if (isLoading) {
    return <Loading></Loading>
  }
  // useEffect(() => {
  //   fetch(`http://localhost:5000/available?date=${formattedDate}`)
  //     .then(res => res.json())
  //     .then(data => setServices(data))
  // }, [formattedDate])
  return (
    <div>
      <h1 className='text-xl text-secondary  text-center mb-5'>
        Available service on : {format(date, 'PP')}
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-12 ml-12'>
        {services?.map(service => (
          <AppointmentService
            key={service.id}
            service={service}
            setTreatments={setTreatments}
          ></AppointmentService>
        ))}
      </div>
      {treatments && (
        <BookingModal
          date={date}
          setTreatments={setTreatments}
          treatments={treatments}
          refetch={refetch}
        ></BookingModal>
      )}
    </div>
  )
}

export default AvailableAppointment
