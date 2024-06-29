import { Divider } from "@nextui-org/react";
import React from "react";
import { FaChevronRight, FaInstagramSquare } from "react-icons/fa";
import { FaFacebook, FaXTwitter } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { IoLogoPinterest } from "react-icons/io";
import { MdAddLocationAlt, MdOutlineAttachEmail } from "react-icons/md";

export default function Fotter() {
  return (
    <div className="bg-[#fdfdfdfb] md:pt-[6em] pt-[3em] w-[100vw] h-[100%] px-[5%]">
      <div className="xl:pb-[6em] pb-[3em] xl:flex max-md:flex-col justify-around">
        <div className="flex gap-3 flex-col xl:w-[33%]">
          <h1 className="text-[#252525] font-[700] text-[3rem]"> <img src={require('../Assets/LOGO.png')} alt=""  className='h-[3rem] object-cover'/></h1>
          <p className="text-[1.1em] text-[#252525] font-semibold tracking-wider">
            Lorem ipsum dolor sit amet consectetur adipiscing elit ut elit el
            tellus, luctus nec ullamcorper mattiso amatug.
          </p>
          <div className="flex gap-2">
            <span className="w-[2.3rem] h-[2.3rem] items-center flex justify-center bg-[#F01A22] rounded-full">
              <FaFacebook className="text-white text-[1rem]" />
            </span>
            <span className="w-[2.3rem] h-[2.3rem] items-center flex justify-center bg-[#F01A22] rounded-full">
              <FaXTwitter className="text-white text-[1rem]" />
            </span>
            <span className="w-[2.3rem] h-[2.3rem] items-center flex justify-center bg-[#F01A22] rounded-full">
              <FaInstagramSquare  className="text-white text-[1rem]" />
            </span>
            <span className="w-[2.3rem] h-[2.3rem] items-center flex justify-center bg-[#F01A22] rounded-full">
              <IoLogoPinterest className="text-white text-[1rem]" />
            </span>
          </div>
        </div>

            <div className="xl:flex flex-col max-xl:mt-[2rem] gap-10 xl:justify-center xl:w-[33%]">
                <div className="flex flex-col gap-3">

                    <h1 className="text-[1.5em] text-[#F01A22] font-bold">Quick Links</h1>
                    <div className="flex flex-col gap-2">
                        <h1 className="text-[1.1em] cursor-pointer te[#252525]252525] font-semibold flex gap-2 items-center transition-all hover:text-[#c80000]"> <FaChevronRight className='text-slate-400' /><a href="/"> Home</a> </h1>
                        <h1 className="text-[1.1em] cursor-pointer te[#252525]252525] font-semibold flex gap-2 items-center transition-all hover:text-[#c80000]"> <FaChevronRight className='text-slate-400' /> <a href="/about"> About</a> </h1>
                        <h1 className="text-[1.1em] cursor-pointer te[#252525]252525] font-semibold flex gap-2 items-center transition-all hover:text-[#c80000]"> <FaChevronRight className='text-slate-400' /> <a href="/services"> Services</a> </h1>

                        <h1 className="text-[1.1em] cursor-pointer te[#252525]252525] font-semibold flex gap-2 items-center transition-all hover:text-[#c80000]"> <FaChevronRight className='text-slate-400' /> <a href="/contact">Contact</a> </h1>
                 

                    </div>
                </div>
                <div className="flex flex-col max-xl:mt-[2rem] gap-3">

                    <h1 className="text-[1.5em] text-[#F01A22] font-bold">Services</h1>
                    <div className="flex flex-col gap-2">
                        <h1 className="text-[1.1em] cursor-pointer text-[#252525] font-semibold flex gap-2 items-center transition-all hover:text-[#c80000]"> <FaChevronRight className='text-slate-400' />Primary Care</h1>
                        <h1 className="text-[1.1em] cursor-pointer text-[#252525] font-semibold flex gap-2 items-center transition-all hover:text-[#c80000]"> <FaChevronRight className='text-slate-400' /> Specialty Care</h1>
                        <h1 className="text-[1.1em] cursor-pointer text-[#252525] font-semibold flex gap-2 items-center transition-all hover:text-[#c80000]"> <FaChevronRight className='text-slate-400' /> 
                        Emergency Care</h1>
                        <h1 className="text-[1.1em] cursor-pointer text-[#252525] font-semibold flex gap-2 items-center transition-all hover:text-[#c80000]"> <FaChevronRight className='text-slate-400' /> Surgical Services</h1>
                        <h1 className="text-[1.1em] cursor-pointer text-[#252525] font-semibold flex gap-2 items-center transition-all hover:text-[#c80000]"> <FaChevronRight className='text-slate-400' /> Mental Health Services</h1>
                 

                    </div>
                </div>
            </div>


        <div className="flex flex-col gap-5 xl:ml-[2rem] max-xl:mt-[2rem] xl:w-[33%]">
            <h1 className="text-[#F01A22] font-bold text-[1.5em] tracking-wider">Information
            </h1>
            <div className="flex flex-col gap-3">
                <div className="flex gap-3 items-center">
                <FiPhoneCall className="text-[3rem] text-[#c80000] " />
                <div className="flex flex-col text-[1.2em] font-bold text-[#252525]">
                    <h1>Phone</h1>
                    <h1>1234-567-890</h1>
                </div>
                </div>
                <div className="flex gap-3 items-center">
                <MdOutlineAttachEmail className="text-[3rem] text-[#c80000] " />
                <div className="flex flex-col text-[1.2em] font-bold text-[#252525]">
                    <h1>Email</h1>
                    <h1>hello@domainsite.com</h1>
                </div>
                </div>
                <div className="flex gap-3 items-center">
                <MdAddLocationAlt className="text-[3rem] text-[#c80000] " />
                <div className="flex flex-col text-[1.2em] font-bold text-[#252525]">
                    <h1>Location</h1>
                    <h1>KLLG st, No.99, Pku City, ID 28289</h1>
                </div>
                </div>

            </div>
        </div>
      </div>
      <Divider/>
      <div className="h-[5rem] text-center items-center
      flex justify-center text-[#252525] font-semibold text-[1.1em] tracking-wider">
        <h1>Copyright 2024 © All Right Reserved Design by <b className="cursor-pointer transition-all hover:text-[#c80000]">Unitechno</b></h1>


      </div>
    </div>
  );
}
