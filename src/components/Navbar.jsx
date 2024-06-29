import { Divider } from '@nextui-org/react'
import React, { useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import { MdOutlineCancel } from 'react-icons/md'

export default function Navbar() {
  const [menu,setMenu]=useState(false)
  return (
    <div className='flex w-[100vw] relative overflow-y-visible   items-center py-[1.2rem] bg-[#f03a22c0] text-[1.2rem] text-[#f4f4f4] font-semibold'>
      <div className='flex justify-between items-center px-[3%] w-[100%]'>
        <div className='flex gap-3'> 
            <ul className='flex gap-10 max-xl:hidden'>
                <li className='hover:text-[#802828] tracking-wider transition-all cursor-pointer'><a href="/"> Home</a></li>
                <li  className='hover:text-[#802828] tracking-wider transition-all cursor-pointer'><a href='/about'> About </a> </li>
                <li className='hover:text-[#802828] tracking-wider transition-all cursor-pointer'><a href="/services"> Services </a> </li>
    
                <li className='hover:text-[#802828] tracking-wider transition-all cursor-pointer'><a href="/contact">Contact </a> </li>
            </ul>
            <div className='border-[2px] xl:hidden rounded-md px-1 py-[0.1rem] border-white'>
            {!menu &&<FiMenu onClick={()=>setMenu(true)} className='text-white  font-semibold text-[2.5rem]'/>}
            {menu && <MdOutlineCancel onClick={()=>setMenu(false)} className='text-white  font-semibold text-[2.5rem]'/>}
            </div>
        </div>
        <div>
            <h1 className='bg-[#d63939]  hover:bg-[#7e16169d] cursor-pointer rounded-md transition-all lg:text-[1.5rem] max-lg:text-[1.2rem] tracking-wider  font-semibold lg:px-[2rem] max-xl:px-[1.5rem] py-[0.6rem]'>Make Appointment</h1>
        </div>
      </div>
    {menu &&  <div className='w-[100%] xl:hidden h-[12rem] z-40 absolute bottom-[-12rem] bg-[#960601]'>
        <div className='flex flex-col gap-2 px-[1rem] pt-[0.5rem]  font-semibold tracking-wider'>
          <h1 ><a href='/' onClick={()=>setMenu(false)}>Home</a></h1>
          <Divider/>
          <h1><a href='/about' onClick={()=>setMenu(false)}>About</a></h1>
          <Divider/>
          <h1><a href='/services' onClick={()=>setMenu(false)}>Services</a></h1>
          <Divider/>
          <h1><a href='/contact' onClick={()=>setMenu(false)}>Contact</a></h1>
         

        </div>
      </div>}
    </div>
  )
}
