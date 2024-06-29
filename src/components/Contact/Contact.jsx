import React from 'react'

export default function Contact() {
  return (
    <div className='bg1 w-[99vw] overflow-hidden h-[100%]  flex justify-center items-center z-20 bg-cover relative '>
    <div className='bg-[#f1bbbb77] w-[100%] h-[100%] absolute z-10 '/>
<div style={{zIndex:'inherit'}} className='max-w-[1350px] xl:pt-[7em] xl:pb-[12em] py-[3em] px-[4%]   w-[100%] h-[100%] items-center flex justify-between '>
        <div className='w-[100%] xl:flex flex-col gap-10 justify-between items-center'>
            <div className='xl:w-[43%] text-white flex flex-col gap-3 bg-[#960101] rounded-xl h-[100%] p-[2rem]'>
                <h1 className='text-[1.4em] font-semibold tracking-wider'>Contact Information</h1>
                <p className='text-[1.1em]  tracking-wider'>
                Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
                </p>
                <div className="md:flex flex-col  gap-5 mt-4 items-center">
                    <img src="https://gtkit.rometheme.pro/glinic/wp-content/uploads/sites/51/2024/06/Contact-Icon-5.png" alt="" 
                    className='w-[4rem]'
                    />
                    <div className='flex max-md:mt-3 flex-col '>
                        <h1 className='text-[1.5em] font-semibold tracking-wider'>Phone</h1>
                        
                        <div className='flex flex-col text-[1.2em]'>
                            
                            <h2>General: +123-234-1234</h2>
                            <h2>Appointments: +123-234-1234</h2>
                            </div>

                    </div>
                </div>

                <div className="md:flex flex-col gap-5 mt-4 items-center">
                    <img src="https://gtkit.rometheme.pro/glinic/wp-content/uploads/sites/51/2024/06/Contact-Icon-7.png" alt="" 
                    className='w-[4rem]'
                    />
                    <div className='flex max-md:mt-3 flex-col '>
                        <h1 className='text-[1.5em] font-semibold tracking-wider'>Email</h1>
                        
                        <div className='flex flex-col text-[1.2em]'>
                            
                            <h2>hello@awesomesite.com</h2>
                            {/* <h2>Appointments: +123-234-1234</h2> */}
                            </div>

                    </div>
                </div>

                <div className="md:flex flex-col gap-5 mt-4 items-center">
                    <img src="https://gtkit.rometheme.pro/glinic/wp-content/uploads/sites/51/2024/06/Contact-Icon-8.png" alt="" 
                    className='w-[4rem]'
                    />
                    <div className='flex flex-col max-md:mt-3 '>
                        <h1 className='text-[1.5em] font-semibold tracking-wider'>
                        Website</h1>
                        
                        <div className='flex flex-col text-[1.2em]'>
                            
                            <h2>www.domainsite.com</h2>
                            {/* <h2>Appointments: +123-234-1234</h2> */}
                            </div>

                    </div>
                </div>

                <div className="md:flex flex-col gap-5 mt-4 items-center">
                    <img src="https://gtkit.rometheme.pro/glinic/wp-content/uploads/sites/51/2024/06/Contact-Icon-6.png" alt="" 
                    className='w-[4rem]'
                    />
                    <div className='flex flex-col max-md:mt-3 '>
                        <h1 className='text-[1.5em] font-semibold tracking-wider'>Address</h1>
                        
                        <div className='flex flex-col text-[1.2em]'>
                            
                            <h2>KLLG st, No.99, Pku City, ID 28289</h2>
                            {/* <h2>Appointments: +123-234-1234</h2> */}
                            </div>

                    </div>
                </div>

            </div>
            <div className='bg-[#c8000026] p-[2rem] pt-[4rem]  pb-[4rem] max-xl:mt-[2rem] xl:w-[55%] rounded-xl h-[100%] border-b-[5px] border-b-[#c80000]'>
               <form action="" className='flex flex-col gap-7'>
                <input type="text" placeholder='Full Name' required className='rounded-md h-[3rem] px-4 w-[100%] outline-none bg-white'/>
                <input type="email" placeholder='Email' required className='rounded-md h-[3rem] px-4 w-[100%] outline-none bg-white'/>
                <input type="text" placeholder='Subject' required className='rounded-md h-[3rem] px-4 w-[100%] outline-none bg-white'/>
                <textarea name="message" id="" rows={4} className='rounded-md p-4 outline-none' placeholder='Message'></textarea>
                <button className='uppercase text-[1.2em] font-semibold text-white bg-[#960101] rounded-md transition-all hover:bg-[#d86666] text-center items-center h-[3rem]'> send message</button>
               </form>
            </div>

        </div>

      </div>
    </div>
  )
}
