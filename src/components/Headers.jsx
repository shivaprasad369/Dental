import React from 'react'
import { CiPhone } from 'react-icons/ci'
import { MdOutlineMarkEmailRead } from 'react-icons/md'
import { SlLocationPin } from 'react-icons/sl'

export default function Headers() {
  return (
    <div className='flex items-center py-[1.3rem] px-[5%] w-[100vw] overflow-hidden'>
     <div className='flex justify-between items-center w-[100%]' >
        <div className='text-[3rem] font-bold uppercase'>
            <img src={require('../Assets/LOGO.png')} alt=""  className='xl:h-[3rem] max-xl:h-[2rem] max-md:h-[2.5rem] object-cover'/>
        </div>
        <div className='flex max-md:hidden xl:gap-[3rem] max-xl:gap-[1rem] items-center'>
            <div className='flex gap-5 items-center'>
                <div >
                <CiPhone className='text-[2.6rem] text-[#df6460]'/>

                </div>
                <div className='flex flex-col '>
                    <h1 className='text-[1.4rem] font-semibold'>Phone</h1>
                    <h3 className='text-slate-500 text-[1.2rem]'>+918197287628</h3>
                </div>
            </div>

            <div className='flex max-lg:hidden gap-5 items-center'>
                <div className='text-[2.6rem] text-[#df6460]'>
                <MdOutlineMarkEmailRead />

                </div>
                <div className='flex flex-col ga-3'>
                    <h1 className='text-[1.4rem] font-semibold'> Email</h1>
                    <h3 className='text-slate-500 text-[1.2rem]'>thetoothplacehubli@gmail.com</h3>
                </div>
            </div>

            <div className='flex gap-5 items-center'>
                <div className='text-[2.6rem] text-[#df6460]'>
                <SlLocationPin />

                </div>
                <div className='flex flex-col ga-3'>
                    <h1 className='text-[1.4rem] font-semibold'>Location</h1>
                    <h3 className='text-slate-500 text-[1.2rem]'>Maratha Galli, New Hubli, Hubballi, Karnataka 580020.</h3>
                </div>
            </div>
            
        </div>
     </div>
    </div>
  )
}
