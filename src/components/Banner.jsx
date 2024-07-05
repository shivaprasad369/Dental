import { motion } from 'framer-motion'
import React from 'react'
import { MdOutlineHealthAndSafety, MdOutlinePermPhoneMsg } from 'react-icons/md'
export default function Banner() {
  return (
    <div className={"bg relative w-[100vw] z-10 overflow-x-hidden  justify-center items-center  bg-cover h-[35rem]"}>     
    <div className="bg-gradient-to-r lg:z-10 max-lg:-z-10 from-[#ffffff00] to-[#fc1024ab] absolute right-0 h-[100%] w-[50%]"/>
     <motion.div variants={{once:true}} initial={{opacity:0,x:200}} whileInView={{opacity:1,x:0,transition:{duration:0.6,type:'tween'}}} className='xl:absolute z-40 lg:right-[2.5rem] lg:p-[3em] max-lg:p-[1rem] max-lg:ml-[5%] xl:h-[100%]  max-xl:items-center max-xl:justify-center  max-md:flex-col xl:w-[50%] max-xl:w-[70%] max-md:w-[90%] md:ml-[15%] max-xl:mt-[2rem] bg-white border-b-[7px] border-b-[#790c1bc4] rounded-xl'>
        <div className='flex flex-col gap-[20px]'>
          <h1 className='text-[#019096] text-[1.2rem] font-[700] leading-[1em] tracking-[2px] uppercase '>Your Dental Health, Our Priority</h1>
          <h1 className='xl:w-[100%] text-[#252525] font-[700] lg:text-[3.2rem] max-md:text-[1.7rem]  max-xl:text-[2.5rem] leading-[1.2em]  tracking-wide'>Personalized Dental Services You Can Trust
          </h1>
          <p className='md:text-[1.2rem] max-md:text-[1rem] text-slate-500 tracking-wider md:leading-[2rem]'>At Tooth Place in Hubli, we believe in providing top-notch dental care tailored to your needs. Our team of
          experienced dentists is dedicated to ensuring your oral health is maintained at its best. </p>
          <div className='text-white text-[1em] font-semibold md:hidden  bg-[#f73c3c] rounded-md px-[1.5rem] py-2 w-fit'>
            Contact us
          </div>
          <div className='xl:flex max-xl:flex-col max-xl:gap-5 max-md:hidden justify-around mt-1 items-center'>
            <div className=' flex gap-5 items-center'>
            <MdOutlineHealthAndSafety  className='text-[5rem] text-[#f53939]'/>
            <div className='flex flex-col'>
              <h1 className='text-[1.1em] font-bold text-[#252525] tracking-wider'>Expert Dental Advice</h1>
              <p className='text-[1em] leading-[1.2em] text-slate-500'>Our knowledgeable team provides you with the best dental care tips and
              treatments</p>
            </div>
            </div>
            <div className=' flex gap-5 items-center'>
            <MdOutlinePermPhoneMsg  className='text-[5rem] text-[#f53939]'/>
            <div className='flex flex-col'>
            <h1 className='text-[1.1em] font-bold text-[#252525] tracking-wider'>Always Available</h1>
              <p className='text-[1em] leading-[1.2em] text-slate-500'>We understand dental issues can arise anytime. That's why our services are available
              whenever you need them.</p>
            </div>
            </div>
          </div>
        </div>
     </motion.div>
    </div>
  )
}
