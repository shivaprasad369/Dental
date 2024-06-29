import React from 'react'
import CountUp from 'react-countup';

export default function Experience() {
  // const { start } = useCountUp({
  //   ref: 'counter',
  //   end: 100,
  //   enableScrollSpy: true,
  //   scrollSpyDelay: 1000,
  // });
  return (
    <div className='bg-[rgb(150,1,1)] text-white   py-[6em] flex justify-around 2xl:justify-center  w-[100vw] h-[100%]]'>
        <div className='grid xl:grid-cols-4 md:grid-cols-2 max-md:grid-col-1 max-w-[1350px] 2xl:gap-10 ustify-around  gap-10 max-xl:gap-20  items-center'>
        <div className='flex flex-col gap-2 justify-center items-center'>
            <img src="https://gtkit.rometheme.pro/glinic/wp-content/uploads/sites/51/2024/06/Funfact-Icon-1.png" width={80} alt=""  />
            <h1 className='text-[3.5rem] leading-[3.6rem] font-bold mt-3'><CountUp end={25} enableScrollSpy /> Th</h1>
            
            <h1 className='text-[1.6rem] leading-[1.7rem] font-bold tracking-wider'>Years of Experience</h1>
            </div>     
            <div className='flex flex-col gap-2 justify-center items-center'>
            <img src="https://gtkit.rometheme.pro/glinic/wp-content/uploads/sites/51/2024/06/Funfact-Icon-2.png" width={80} alt=""  />
            <h1 className='text-[3.5rem] leading-[3.6rem] font-bold mt-3'><CountUp end={500} enableScrollSpy /> +</h1>
            <h1 className='text-[1.6rem] leading-[1.7rem] font-bold tracking-wider'>Doctors & Staff</h1>
            </div>      
            <div className='flex flex-col gap-2 justify-center items-center'>
            <img src="https://gtkit.rometheme.pro/glinic/wp-content/uploads/sites/51/2024/06/Funfact-Icon-3.png" width={80} alt=""  />
            <h1 className='text-[3.5rem] leading-[3.6rem] font-bold mt-3'><CountUp end={5500} enableScrollSpy /> +</h1>
            <h1 className='text-[1.6rem] leading-[1.7rem] font-bold tracking-wider'>Happy Patients</h1>
            </div>      
            <div className='flex flex-col gap-2 justify-center items-center'>
            <img src="https://gtkit.rometheme.pro/glinic/wp-content/uploads/sites/51/2024/06/Funfact-Icon-4.png" width={80} alt=""  />
            <h1 className='text-[3.5rem] leading-[3.6rem] font-bold mt-3'><CountUp end={750} enableScrollSpy /> +</h1>
            <h1 className='text-[1.6rem] leading-[1.7rem] font-bold tracking-wider'>Hospital Rooms</h1>
            </div>       

         </div>   
    </div>
  )
}
