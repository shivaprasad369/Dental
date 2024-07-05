import React, { useState } from 'react'
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
import Loader from './Loader'

export default function HomePage() {
 const [load,setLoad]= useState(false);
 setTimeout(()=>
setLoad(true),3000)
  return (
    <div>
          {load ? <> <Headers/>
      <Navbar/>
      <Banner/>
      <About/>
      <Services/>
      <Experience/>
      <Appointment/>
      <Why/>
      <Testimonial/>
      <Fotter/></> :<Loader/>}
      {/* <Laoder/> */}
    </div>
  )
}
