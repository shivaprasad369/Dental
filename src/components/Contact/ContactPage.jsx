import React from 'react'
import Headers from '../Headers'
import Navbar from '../Navbar'
import Banner from './Banner'
import Fotter from '../Fotter'
import Contact from './Contact'

export default function ContactPage() {
  return (
    <div>
      <Headers/>
      <Navbar/>
      <Banner/>
      <Contact/>
      <div className='w-[100vw] h-[28rem]'>
      <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3847.5640318973515!2d75.14116607416445!3d15.345909958397312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8d7140b0a1e99%3A0xd11a874137fcda8e!2sThe%20Tooth%20Place!5e0!3m2!1sen!2sin!4v1719573054558!5m2!1sen!2sin" className='w-[100%] h-[100%] border-0'  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <Fotter/>
    </div>
  )
}
