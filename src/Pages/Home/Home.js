import React from 'react'
import Appointment from './Appointment'
import Banner from './Banner'
import Info from './InfoAll/Info'
import Services from './Services'

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <Appointment></Appointment>
    </div>
  )
}

export default Home
