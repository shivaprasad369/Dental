import { motion } from "framer-motion";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram, FaXTwitter } from "react-icons/fa6";
import {  IoLogoPinterest } from "react-icons/io";

export default function Doctor() {
  return (
    <div className="bg-[#d46b7426] flex justify-center items-center flex-col w-[100vw] xl:py-[7em] py-[3em] h-[100%]">
      <div className="flex flex-col gap-2 max-w-[1350px]">
        <h1 className="uppercase text-[1.25em] font-semibold text-center tracking-wider text-[#f3454e]">
        DOCTORS
        </h1>
        <h1 className="xl:text-[3rem] text-[2.5rem] max-xl:leading-[3rem] font-bold text-center text-[#252525] tracking-wider">
        Our Dedicated Doctors
        </h1>
        <p className="text-[1.2em] text-center text-slate-500">
        Tooth Place Clinic is proud to have a team of highly skilled and compassionate dental professionals.
          <br />Each member of our team brings years of experience and a commitment to providing exceptional dental care to our patients..
        </p>
      </div>
      <div className="grid  xl:grid-cols-3 max-md:grid-cols-1 max-w-[1350px] w-[100%] items-center overflow-hidden justify-center gap-5 px-[2%] mt-[2rem]">
        
        {/* <motion.div className="md:flex max-md:flex-col  gap-5" variants={{once:true}} initial={{opacity:0, x:-200}} whileInView={{opacity:1,x:0,transition:{duration:0.6}}}> */}
          <motion.div variants={{once:true}} initial={{opacity:0, x:-200}} whileInView={{opacity:1,x:0,transition:{duration:0.6}}}  className="flex flex-col bg-white border-b-[7px] p-[2rem]  border-[#d3262fa4]  rounded-xl">
          
          <div className="my-7 relative overflow-hidden rounded-xl">
            <img
              src="https://gtkit.rometheme.pro/glinic/wp-content/uploads/sites/51/2024/06/Doctor-1.jpg"
              alt=""
              className="w-[100%] z-10 object-cover "
            />
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileHover={{ opacity: 1, y: 0, transition: { duration: 0.7 } }}
              className="bg-gradient-to-b from-[#f0f3f300] flex justify-center to-[#eb5965cb] absolute h-[100%] w-[100%] bottom-0 z-20"
            >
              <button className="border-[-px] flex gap-4 rounded-lg bg-transparent  hover:border-0 text-white  tracking-wider transition-all uppercase px-[1.5rem] py-[1rem] items-center mt-[85%] h-fit text-bold font-[700]">
              <FaFacebook className="text-[1.8rem] text-white" />
              <FaSquareInstagram className="text-[1.8rem] text-white" />
              <FaXTwitter className="text-[1.8rem] text-white" />
              <IoLogoPinterest className="text-[1.8rem] text-white" />
              </button>
            </motion.div>
          </div>
          <div className="flex flex-col  items-center justify-center ">
           <h1 className="text-[1.5em] font-bold ">
           Dr Sanjay Ganeshkar 
           </h1>
           <span className="text-[1.2em]  ">Consulting Orthodontist</span>
          </div>
        </motion.div>


        <div className="flex flex-col max-md:mt-[1rem] bg-white border-b-[7px] p-[2rem]  border-[#d3262fa4]  rounded-xl">
          
          <div className="my-7 relative overflow-hidden rounded-xl">
            <img
              src="https://gtkit.rometheme.pro/glinic/wp-content/uploads/sites/51/2024/06/Doctor-1.jpg"
              alt=""
              className="w-[100%] z-10 object-cover "
            />
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileHover={{ opacity: 1, y: 0, transition: { duration: 0.7 } }}
              className="bg-gradient-to-b from-[#f0f3f300] flex justify-center to-[#eb5965cb] absolute h-[100%] w-[100%] bottom-0 z-20"
            >
              <button className="border-[-px] flex gap-4 rounded-lg bg-transparent  hover:border-0 text-white  tracking-wider transition-all uppercase px-[1.5rem] py-[1rem] items-center mt-[85%] h-fit text-bold font-[700]">
              <FaFacebook className="text-[1.8rem] text-white" />
              <FaSquareInstagram className="text-[1.8rem] text-white" />
              <FaXTwitter className="text-[1.8rem] text-white" />
              <IoLogoPinterest className="text-[1.8rem] text-white" />
              </button>
            </motion.div>
          </div>
          <div className="flex flex-col  items-center justify-center ">
           <h1 className="text-[1.5em] font-bold flex ">
           Dr Jyoti Ganeshkar 
           </h1>
           <span className="text-[1.2em]  ">Certified implantologist</span>
          </div>
        </div>
          {/* </motion.div> */}
          <motion.div className="md:flex max-md:flex-col gap-5" variants={{once:true}} initial={{opacity:0, x:200}} whileInView={{opacity:1,x:0,transition:{duration:0.6}}}>

        <div  className="flex flex-col bg-white border-b-[7px] p-[2rem]  border-[#d3262fa4]  rounded-xl">
          
          <div className="my-7 relative overflow-hidden rounded-xl">
            <img
              src="https://gtkit.rometheme.pro/glinic/wp-content/uploads/sites/51/2024/06/Doctor-1.jpg"
              alt=""
              className="w-[100%] z-10 object-cover "
            />
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileHover={{ opacity: 1, y: 0, transition: { duration: 0.7 } }}
              className="bg-gradient-to-b from-[#f0f3f300] flex justify-center to-[#eb5965cb] absolute h-[100%] w-[100%] bottom-0 z-20"
            >
              <button className="border-[-px] flex gap-4 rounded-lg bg-transparent  hover:border-0 text-white  tracking-wider transition-all uppercase px-[1.5rem] py-[1rem] items-center mt-[85%] h-fit text-bold font-[700]">
              <FaFacebook className="text-[1.8rem] text-white" />
              <FaSquareInstagram className="text-[1.8rem] text-white" />
              <FaXTwitter className="text-[1.8rem] text-white" />
              <IoLogoPinterest className="text-[1.8rem] text-white" />
              </button>
            </motion.div>
          </div>
          <div className="flex flex-col  items-center justify-center ">
           <h1 className="text-[1.5em] font-bold ">
           Dr Hersh Ganeshkar 
           </h1>
           <span className="text-[1.2em]  ">Dental Surgeon</span>
          </div>
        </div>
        {/* <div  className="flex flex-col max-md:mt-[1rem] bg-white border-b-[7px] p-[2rem]  border-[#d3262fa4]  rounded-xl">
          
          <div className="my-7 relative overflow-hidden rounded-xl">
            <img
              src="https://gtkit.rometheme.pro/glinic/wp-content/uploads/sites/51/2024/06/Doctor-1.jpg"
              alt=""
              className="w-[100%] z-10 object-cover "
            />
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileHover={{ opacity: 1, y: 0, transition: { duration: 0.7 } }}
              className="bg-gradient-to-b from-[#f0f3f300] flex justify-center to-[#eb5965cb] absolute h-[100%] w-[100%] bottom-0 z-20"
            >
              <button className="border-[-px] flex gap-4 rounded-lg bg-transparent  hover:border-0 text-white  tracking-wider transition-all uppercase px-[1.5rem] py-[1rem] items-center mt-[85%] h-fit text-bold font-[700]">
              <FaFacebook className="text-[1.8rem] text-white" />
              <FaSquareInstagram className="text-[1.8rem] text-white" />
              <FaXTwitter className="text-[1.8rem] text-white" />
              <IoLogoPinterest className="text-[1.8rem] text-white" />
              </button>
            </motion.div>
          </div>
          <div className="flex flex-col  items-center justify-center ">
           <h1 className="text-[1.5em] font-bold ">
           Dr. Emma Stone
           </h1>
           <span className="text-[1.2em]  ">General Practitioner</span>
          </div>
        </div> */}
          </motion.div>
      </div>
     
    </div>
  );
}
