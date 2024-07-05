import React from "react";

export default function Appointment() {
  return (
    <div className="bg2 bg-cover w-[100vw] h-[100%] z-10 relative flex 2xl:justify-center items-center">
      <div className="  bg-gradient-to-r from-[#25252548]  to-[#be0a0a6c] z-20 absolute w-[100%] h-[100%]" />
      <div className="flex flex-col gap-6 text-white md:py-[6em] py-[5em] w-[100%] h-[100%] z-30 px-[5%] 2xl:max-w-[1350px]">
        <h1 className="md:text-[2.8rem] max-md:text-[2rem] max-md:leading-[2.6rem] text-white leading-[3.5rem] font-bold">
          Get Your Free Dental Consultation or <br className="max-md:hidden" />{" "}
          Book Your Appointment Now
        </h1>
        <p className="text-[#faf8f8fb] tracking-wide text-[1em] xl:w-[70%] max-md:text-[1.1em] font-semibold">
          Take the first step towards a healthier smile with Tooth Place in
          Hubli. Schedule your free consultation today and discover personalized
          dental care tailored to your needs. Our expert team is here to provide
          comprehensive evaluations and discuss the best treatment options for
          yo
        </p>
        <div className="flex max-md:flex-col max-md:mt-4 md:gap-5  uppercase text-[1em] tracking-widest font-semibold">
          <span className="bg-[#960101] h-fit w-fit transition-all hover:bg-[#c80000] px-[1rem] rounded-md py-[0.8rem]">
          Book Appointment
          </span>
          <br className="md:hidden" />
          {/* <span className="hover:bg-[#960101] w-fit h-fit transition-all bg-[#c80000] px-[1rem] rounded-md py-[0.8rem]">
            Make Appointment
          </span> */}
        </div>
      </div>
    </div>
  );
}
