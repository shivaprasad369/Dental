import React from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import CountUp from "react-countup";
import { motion } from "framer-motion";
export default function About() {
  // const { start } = useCountUp({
  //   ref: 'counter',
  //   end: 100,
  //   enableScrollSpy: true,
  //   scrollSpyDelay: 1000,
  // });
  return (
    <div className="bg1 w-[100vw] overflow-hidden h-[100%] flex justify-center items-center z-20 bg-cover relative ">
      <div className="bg-[#f1bbbb77] w-[100%] h-[100%] absolute z-10 " />

      <div
        style={{ zIndex: "inherit" }}
        className="max-w-[1350px] max-md:pt-[3em] md:pt-[7em]  max-md:pb-[3em] md:pb-[12em] px-[4%]   w-[100%] h-[100%] items-center xl:flex   justify-between "
      >
        <div className="w-[100%] h-[100%] xl:hidden">
          <motion.div
            variants={{ once: true }}
            initial={{ opacity: 0, x: 200 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.6, type: "tween" },
            }}
            className="xl:w-[40%] xl:hidden relative mb-[5rem] flex items-center justify-center"
          >
            <div className="w-[80%]">
              <img
                src="https://gtkit.rometheme.pro/glinic/wp-content/uploads/sites/51/2024/06/About-Us-Image-1.jpg"
                alt=""
                className="w-[100%] h-[100%] rounded-lg"
              />
            </div>
            <div className="w-[80%] md:py-[2.4rem] md:px-[2.5rem] flex gap-5 max-md:gap-2 px-[1rem] text-white bg-[#f84960] py-[1rem] rounded-lg rounded-bl-[40px] absolute bottom-[-3.5rem] left-[-0.2rem]">
              <span className="text-[2.3rem] md:text-[3.5rem] md:leading-[4rem]  leading-[3rem] font-bold flex flex-col items-center">
                <CountUp end={25} enableScrollSpy />{" "}
                <h1 className="text-[1rem] md:text-[1.5rem] uppercase tracking-wider leading-[0.7rem]">
                  YEARS
                </h1>{" "}
              </span>
              <div className="border-r-[3px] border-white " />
              <div className="text-[0.8rem] md:text-[1.7rem] md:leading-[2rem] leading-[1.3rem]  font-semibold tracking-wider pr-[2rem]">
                {" "}
                Already Experienced In The World of Health
              </div>
            </div>
            <div className="absolute md:right-[-1rem] sm:right-0 right-[-1rem] md:bottom-[-1rem] max-md:w-[40%] w-[45%] bottom-[-1rem] max-md:border-[0.4rem] border-[0.7rem] rounded-lg border-[#f3d3d3]">
              <img
                src="https://gtkit.rometheme.pro/glinic/wp-content/uploads/sites/51/2024/06/About-Us-Image-2.jpg"
                alt=""
                className="rounded-lg"
              />
            </div>
          </motion.div>
        </div>
        <div className="flex flex-col gap-5 xl:w-[53%]">
          <h1 className="text-[1.2em] text-[#d13f3f] tracking-wider font-bold">
            ABOUT US
          </h1>
          <p className="md:text-[3.1rem] max-md:text-[2.5rem] tracking-wide text-[#252525] leading-[1.3em] font-[700]">
            Providing Exceptional
            <br /> Dental Care for All
          </p>
          <p className="text-[1.2rem] text-slate-600 tracking-wider">
            Tooth Place in Hubli is committed to delivering outstanding dental
            services for everyone. Our state-of-the-art facility and experienced
            team ensure comprehensive care tailored to your dental needs. We
            focus on maintaining and enhancing your oral health through
            personalized treatment plans.
          </p>
          <div className="flex gap-5 mt-3">
            <div className="flex flex-col gap-3">
              <span className="flex gap-3 items-center">
                <IoIosCheckmarkCircle className="text-[#d13f3f] text-[1.6rem]" />
                <h1 className="max-md:text-[1rem] md:text-[1.2rem] font-semibold tracking-wide text-[#252525]">
                  Disease Prevention
                </h1>
              </span>
              <span className="flex gap-3 items-center">
                <IoIosCheckmarkCircle className="text-[#d13f3f] text-[1.6rem]" />
                <h1 className="max-md:text-[1rem] md:text-[1.2rem] font-semibold tracking-wide text-[#252525]">
                  Early Diagnosis & Treatment
                </h1>
              </span>
            </div>
            <div className="flex flex-col gap-3">
              <span className="flex gap-3 items-center">
                <IoIosCheckmarkCircle className="text-[#d13f3f] text-[1.6rem]" />
                <h1 className="max-md:text-[1rem] md:text-[1.2rem] font-semibold tracking-wide text-[#252525]">
                  Improved Quality of Life
                </h1>
              </span>
              <span className="flex gap-3 items-center">
                <IoIosCheckmarkCircle className="text-[#d13f3f] text-[1.6rem]" />
                <h1 className="max-md:text-[1rem] md:text-[1.2rem] font-semibold tracking-wide text-[#252525]">
                  Emergency Care & Trauma Services
                </h1>
              </span>
            </div>
          </div>
          :
          <div className="border-b-[1px] my-5 border-[#252525]" />
          <div className="xl:flex max-xl:flex-col justify-between w-[100%]">
            <div className="flex gap-5  items-center">
              <img
                src="https://gtkit.rometheme.pro/glinic/wp-content/uploads/sites/51/2024/06/About-Us-Image-3.jpg"
                width={75}
                height={75}
                alt=""
                className=" rounded-full"
              />
              <div className="flex flex-col">
                <h1 className="text-[1.7rem] font-semibold">Emma Stone</h1>
                <span className="text-[1.15rem]  tracking-wider text-slate-600">
                  General Practitione
                </span>
              </div>
            </div>
            <div className="xl:w-[55%] ">
              <p className="italic text-[1.5rem]  text-[#252525]">
                “Fusce vitae commodo ipsum, eu ullam corper magna nam non
                posuere.”
              </p>
            </div>
          </div>
          <span className="text-white text-[1.2rem] tracking-widest font-semibold uppercase mt-5 bg-[#f15f5f] rounded-md cursor-pointer hover:bg-[#c80000] transition-all py-[1rem] px-[2rem] w-fit">
            More About Us
          </span>
        </div>
        <motion.div
          variants={{ once: true }}
          initial={{ opacity: 0, x: 200 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, type: "tween" },
          }}
          className="max-xl:w-[40%] relative flex max-xl:hidden items-center justify-center"
        >
          <div className="w-[90%]">
            <img
              src="https://gtkit.rometheme.pro/glinic/wp-content/uploads/sites/51/2024/06/About-Us-Image-1.jpg"
              alt=""
              className="w-[100%] h-[100%] rounded-lg"
            />
          </div>
          <div className="w-[90%] flex gap-5 px-[1rem] text-white bg-[#f84960] py-[2.5rem] rounded-lg rounded-bl-[70px] absolute bottom-[-5.5rem] left-[-2.5rem]">
            <span className="text-[4.3rem] mt-2 leading-[3rem] font-bold flex flex-col items-center">
              <CountUp end={25} enableScrollSpy />{" "}
              <h1 className="text-[1.3rem] uppercase tracking-wider leading-[2.4rem]">
                YEARS
              </h1>{" "}
            </span>
            <div className="border-r-[3px] border-white " />
            <div className="text-[1.2rem]   font-semibold tracking-wider pr-[1rem]">
              {" "}
              Already <br /> Experienced In The <br /> World of Health
            </div>
          </div>
          <div className="absolute right-[-2.5rem] w-[50%] bottom-[-3.5rem] border-[0.7rem] rounded-lg border-[#f3d3d3]">
            <img
              src="https://gtkit.rometheme.pro/glinic/wp-content/uploads/sites/51/2024/06/About-Us-Image-2.jpg"
              alt=""
              className="rounded-lg"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
