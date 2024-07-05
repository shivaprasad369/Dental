import React from 'react'

export default function Loader() {
  return (
    <div className='w-[100vw] relative h-[100vh]  flex justify-center items-center '>
      <div className="preloader-area text-center position-fixed " id="preloader" >
            <div className="loader absolute  left-0  flex w-[100%] justify-center items-center flex-col">
                <img src="https://templates.hibotheme.com/doral/default/assets/images/favicon.png" className='' alt="favicon"/>
               <div className='flex gap-7 max-md:text-[1rem] text-[#ee2e2e]'>

                <div className="waviy position-relative max-md:text-[1rem] flex md:gap-3">
                    <span className="d-inline-block">T</span>
                    <span className="d-inline-block">O</span>
                    <span className="d-inline-block">O</span>
                    <span className="d-inline-block">T</span>
                    <span className="d-inline-block">H</span>
                    </div>
                    <div className="waviy position-relative md:gap-3 flex">
                    
                    <span className="d-inline-block">P</span>
                    <span className="d-inline-block">L</span>
                    <span className="d-inline-block">A</span>
                    <span className="d-inline-block">C</span>
                    <span className="d-inline-block">E</span>
                </div>
               </div>
            </div>
        </div>
    </div>
  )
}
