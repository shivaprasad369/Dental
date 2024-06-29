import React from 'react'
import Headers from '../Headers'
import Navbar from '../Navbar'
import Banner from './Banner'
import Service from '../Services'
import Appointment from '../Appointment'
import Fotter from '../Fotter'
export default function Services() {
  return (
    <div>
      <Headers/>
      <Navbar/>
      <Banner/>
      <Service/>
      <Appointment/>
      <Fotter/>
    </div>
  )
}
