import React from 'react'
import { IoIosCheckmarkCircle } from 'react-icons/io'
// import CountUp, { useCountUp } from 'react-countup';
import { motion } from 'framer-motion';
import { FaPlay } from 'react-icons/fa';
export default function About() {
  // const { start } = useCountUp({
  //   ref: 'counter',
  //   end: 100,
  //   enableScrollSpy: true,
  //   scrollSpyDelay: 1000,
  // });
  return (
    <div className='bg1 w-[99vw] overflow-hidden h-[100%] flex justify-center items-center z-20 bg-cover relative '>
    <div className='bg-[#f1bbbb77] w-[100%] h-[100%] absolute z-10 '/>
    <div style={{zIndex:'inherit'}} className='max-w-[1350px] xl:pt-[7em] xl:pb-[12em] py-[3em] px-[4%]   w-[100%] h-[100%] items-center xl:flex flex-col xl:justify-between '>
    <motion.div variants={{once:true}} initial={{opacity:0,x:200}} whileInView={{opacity:1,x:0,transition:{duration:0.6,type:'tween'}}} className='  relative flex items-center justify-center'> 
          <div className='w-[80%] ml-[5%]'> 

          <img src="https://gtkit.rometheme.pro/glinic/wp-content/uploads/sites/51/2024/06/About-Us-Image-4.jpg" alt="" className='w-[100%] h-[100%] rounded-lg' />
          </div>
          {/* <div className='w-[90%] flex gap-5 px-[1rem] text-white bg-[#019096] py-[2.5rem] rounded-lg rounded-bl-[70px] absolute bottom-[-5.5rem] left-[-2.5rem]'> 
              <span className='text-[4.3rem] mt-2 leading-[3rem] font-bold flex flex-col items-center'><CountUp end={25} enableScrollSpy /> <h1 className='text-[1.3rem] uppercase tracking-wider leading-[2.4rem]'>YEARS</h1> </span>
              <div className='border-r-[3px] border-white '/>
              <div className='text-[1.2rem]   font-semibold tracking-wider pr-[1rem]'> Already <br /> Experienced In The <br /> World of Health</div>
          </div> */}
        <div className='absolute left-[0rem] w-[60%] bottom-[-5.5rem] border-[0rem] rounded-lg border-[#a9dad7f5]'>
          <img src="https://gtkit.rometheme.pro/glinic/wp-content/uploads/sites/51/2024/06/About-Us-Image-5.jpg" alt="" className='rounded-lg'  />
        </div>
        <div className='absolute flex items-center justify-center w-[100%] h-[100%] '>
            <span className='text-white text-[1.5rem] w-[4rem] h-[4rem] bg-[#a73b3be5] rounded-full flex items-center justify-center'>

        <FaPlay />
            </span>
        </div>
        </motion.div>
        <div className='flex flex-col gap-5 xl:w-[53%] max-xl:mt-[8rem] '>
          <h1 className='text-[1.2em] text-[#d13f3f] tracking-wider font-bold'>ABOUT US</h1>
          <p className='xl:text-[3.1rem] text-[2.5rem] leading-[3rem] tracking-wide text-[#252525] xl:leading-[1.3em] font-[700]'>Providing Exceptional<br/> Healthcare for All</p>
          <p className='text-[1.2rem] text-slate-600 tracking-wider'>Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Fusce vitae commodo ipsum, eu ullam corper magna. Nam non posuere lacus, eget viverra massa. Sed magna ligula, lacinia sit amet bibendum eu, porta nec ante.</p>
          <div className=' md:flex flex-col gap-10'>
            <div className='flex max-md:mb-[1rem] flex-col'>
                <h1 className='text-[1.5em] font-semibold tracking-wider'>Our Vision</h1>
                <p className='text-[1.1em] text-slate-600 tracking-wider'>Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Ut elit tellus.</p>
            </div>
            <div >
            <h1 className='text-[1.5em] font-semibold tracking-wider'>Our Mission</h1>
            <p className='text-[1.1em] text-slate-600 tracking-wider'>Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Ut elit tellus.</p>
            </div>

          </div>
          <div className='border-b-[1px] my-5 border-[#252525]'/>
          <div className='md:flex flex-col  gap-5 mt-3'>
            <div className='flex flex-col max-md:mb-3 gap-3'>
              <span className='flex gap-3 items-center'><IoIosCheckmarkCircle className='text-[#d13f3f] text-[1.6rem]'/><h1 className='text-[1.2rem] font-semibold tracking-wide text-[#252525]'>Disease Prevention</h1></span>
              <span className='flex gap-3 items-center'><IoIosCheckmarkCircle className='text-[#d13f3f] text-[1.6rem]'/><h1 className='text-[1.2rem] font-semibold tracking-wide text-[#252525]'>Early Diagnosis & Treatment</h1></span>
            </div>
            <div className='flex flex-col gap-3'>
              <span className='flex gap-3 items-center'><IoIosCheckmarkCircle className='text-[#d13f3f] text-[1.6rem]'/><h1 className='text-[1.2rem] font-semibold tracking-wide text-[#252525]'>Improved Quality of Life</h1></span>
              <span className='flex gap-3 items-center'><IoIosCheckmarkCircle className='text-[#d13f3f] text-[1.6rem]'/><h1 className='text-[1.2rem] font-semibold tracking-wide text-[#252525]'>Emergency Care & Trauma Services</h1></span>
            </div>
          </div>
          
          {/* <div className='flex justify-between w-[100%]'>

          <div className='flex gap-5 items-center'>
            <img src="https://gtkit.rometheme.pro/glinic/wp-content/uploads/sites/51/2024/06/About-Us-Image-3.jpg" width={75} height={75} alt="" className=' rounded-full' />
            <div className='flex flex-col'>
              <h1 className='text-[1.7rem] font-semibold'>Emma Stone</h1>
              <span className='text-[1.15rem]  tracking-wider text-slate-600'>General Practitione</span>
            </div>
          </div>
          <div className='w-[55%]'>
            <p className='italic text-[1.5rem]  text-[#252525]'>
            “Fusce vitae commodo ipsum, eu ullam corper magna nam non posuere.”
            </p>
          </div>
          </div> */}
          {/* <span className='text-white text-[1.2rem] tracking-widest font-semibold uppercase mt-5 bg-[#019096] rounded-md cursor-pointer hover:bg-[#00c8c5] transition-all py-[1rem] px-[2rem] w-fit' >More About Us</span> */}
        </div>
        <motion.div variants={{once:true}} initial={{opacity:0,x:200}} whileInView={{opacity:1,x:0,transition:{duration:0.6,type:'tween'}}} className='w-[40%] max-xl:hidden relative flex items-center justify-center'> 
          <div className='w-[90%] ml-[5%]'> 

          <img src="https://gtkit.rometheme.pro/glinic/wp-content/uploads/sites/51/2024/06/About-Us-Image-4.jpg" alt="" className='w-[100%] h-[100%] rounded-lg' />
          </div>
          {/* <div className='w-[90%] flex gap-5 px-[1rem] text-white bg-[#019096] py-[2.5rem] rounded-lg rounded-bl-[70px] absolute bottom-[-5.5rem] left-[-2.5rem]'> 
              <span className='text-[4.3rem] mt-2 leading-[3rem] font-bold flex flex-col items-center'><CountUp end={25} enableScrollSpy /> <h1 className='text-[1.3rem] uppercase tracking-wider leading-[2.4rem]'>YEARS</h1> </span>
              <div className='border-r-[3px] border-white '/>
              <div className='text-[1.2rem]   font-semibold tracking-wider pr-[1rem]'> Already <br /> Experienced In The <br /> World of Health</div>
          </div> */}
        <div className='absolute left-[-2.5rem] w-[60%] bottom-[-3.5rem] border-[0rem] rounded-lg border-[#a9dad7f5]'>
          <img src="https://gtkit.rometheme.pro/glinic/wp-content/uploads/sites/51/2024/06/About-Us-Image-5.jpg" alt="" className='rounded-lg'  />
        </div>
        <div className='absolute flex items-center justify-center w-[100%] h-[100%] '>
            <span className='text-white text-[1.5rem] w-[4rem] h-[4rem] bg-[#a73b3be5] rounded-full flex items-center justify-center'>

        <FaPlay />
            </span>
        </div>
        </motion.div>
      </div>
      
    </div>
  )
}
