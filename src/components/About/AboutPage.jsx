import React from 'react'
import Headers from '../Headers'
import Navbar from '../Navbar'
import Banner from './Banner'
import About from './About'
import Experience from '../Experience'
import Why from '../Why'
import Appointment from '../Appointment'
import Fotter from '../Fotter'
import Doctor from './Doctor'

export default function AboutPage() {
  return (
    <div>
      <Headers/>
      <Navbar/>
      <Banner/>
      <About/>
      <Experience/>
      <Why/>
      <Appointment/>
      <Doctor/>
      <Fotter/>
    </div>
  )
}
