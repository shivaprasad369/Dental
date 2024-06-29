import React from 'react'

export default function Banner() {
  return (
    <div className='bg3 relative overflow-y-visible w-[100vw] '>
          <div className="bg-gradient-to-r z-10 from-[#44404010] to-[#f0657885]  absolute right-0 h-[100%] w-[75%]"/>
    <div className='w-[100%] h-[100%] z-20 px-[3%] py-[7em]' style={{zIndex:'inherit'}}>
            <h1 className='text-white font-bold text-[3rem] '>Contact</h1>
            <span><h3 className='text-white font-bold text-[1.1em] tracking-wider'><a href='/' className='text-red-500 tracking-wider font-bold text-[1.1em] hover:text-white transition-all '> Home</a> <span className='text-white font-semibold'>/</span> Contact</h3></span>

    </div>

    </div>
  )
}
