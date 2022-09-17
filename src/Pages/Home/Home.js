import React from 'react'
import Footer from '../../Shared/Footer'
import Appointment from './Appointment'
import Banner from './Banner'
import Contact from './Contact'
import Info from './InfoAll/Info'
import Services from './Services'
import Testimonials from './Testimonials'

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <Appointment></Appointment>
      <Testimonials></Testimonials>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default Home
