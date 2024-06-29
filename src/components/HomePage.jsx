import React from 'react'
import Headers from './Headers'
import Navbar from './Navbar'
import Banner from './Banner'
import About from './About'
import Services from './Services'
import Experience from './Experience'
import Appointment from './Appointment'
import Why from './Why'
import Testimonial from './Testimonial'
import Fotter from './Fotter'

export default function HomePage() {
  return (
    <div>
           <Headers/>
      <Navbar/>
      <Banner/>
      <About/>
      <Services/>
      <Experience/>
      <Appointment/>
      <Why/>
      <Testimonial/>
      <Fotter/>
      {/* <Laoder/> */}
    </div>
  )
}
