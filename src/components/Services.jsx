import { motion } from "framer-motion";
import React from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";

export default function Services() {
  return (
    <div className="bg-[#d46b7426] flex justify-center items-center flex-col w-[100vw] max-md:py-[3em] md:py-[7em] h-[100%]">
      <div className="flex flex-col gap-2 max-w-[1350px]">
        <h1 className="uppercase text-[1.25em] font-semibold text-center tracking-wider text-[#ec3740]">
          Services
        </h1>
        <h1 className="md:text-[3rem] max-md:text-[2rem] max-md:leading-[2.5rem] font-bold text-center text-[#252525] tracking-wider">
          Comprehensive Dental Services for All Your Needs
        </h1>
        <p className="text-[1.2em] text-center text-slate-500">
          At Tooth Place in Hubli, we offer a wide range of dental services to
          ensure your oral health is always
          <br />
          at its best. Our dedicated team provides personalized care to meet
          your specific needs.
        </p>
      </div>
      <div className="xl:grid-cols-3  max-md:px-[1rem] md:grid-cols-2 max-md:grid-cols-1 grid max-w-[1350px] w-[100%] items-center overflow-hidden justify-center gap-10 px-[3%] mt-[2rem]">
        <motion.div
          variants={{ once: true }}
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 0.6 } }}
          className="flex flex-col bg-white border-b-[7px] max-md:p-[1rem] md:p-[2rem]  border-[#a7585c]  rounded-xl"
        >
          <div className="md:flex max-md:flex-col gap-5 items-center text-[#252525]">
            <img
              src="https://gtkit.rometheme.pro/glinic/wp-content/uploads/sites/51/2024/06/Services-Icon-1.png"
              alt=""
              className="w-[5rem] max-md:w-[3rem]"
            />{" "}
            <h1 className="md:text-[1.6em] max-md:text-[1.2em] font-semibold tracking-wide">
            Root Canal
            </h1>
          </div>
          <div className="my-7 relative overflow-hidden rounded-xl">
            <img
              src="https://gtkit.rometheme.pro/glinic/wp-content/uploads/sites/51/2024/06/Services-Image-1.jpg"
              alt=""
              className="h-[20rem] z-10 object-cover "
            />
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileHover={{ opacity: 1, y: 0, transition: { duration: 0.7 } }}
              className="bg-gradient-to-b from-[#f0f3f300] flex justify-center to-[#cc4444a4] absolute h-[100%] w-[100%] bottom-0 z-20"
            >
              <button className="border-[2px] rounded-lg bg-transparent hover:bg-[#8a1f31] hover:border-0 text-white text-[0.8em] tracking-wider transition-all uppercase px-[1.5rem] py-[1rem] items-center mt-[45%] h-fit text-bold font-[700]">
                READ MORE
              </button>
            </motion.div>
          </div>
          <div className="flex flex-col gap-3">
            <span className="flex gap-3 items-center">
              <IoIosCheckmarkCircle className="text-[#f03e3e] text-[1.6rem]" />
              <h1 className="text-[1.2rem] font-semibold tracking-wide text-[#252525]">
                General Practitioners (GPs)
              </h1>
            </span>
            <span className="flex gap-3 items-center">
              <IoIosCheckmarkCircle className="text-[#f03e3e] text-[1.6rem]" />
              <h1 className="text-[1.2rem] font-semibold tracking-wide text-[#252525]">
                Preventive Care
              </h1>
            </span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 0 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 0.6 } }}
          className="flex flex-col bg-white border-b-[7px] max-md:p-[1rem] md:p-[2rem]  border-[#a7585c]  rounded-xl"
        >
          <div className="flex max-md:flex-col max-md:gap-2 md:gap-5  text-[#252525]">
            <img
              src="https://gtkit.rometheme.pro/glinic/wp-content/uploads/sites/51/2024/06/Hero-Icon-5.png"
              alt=""
              className="w-[5rem] max-md:w-[3rem]"
            />{" "}
            <h1 className="md:text-[1.6em] max-md:text-[1.2em] font-semibold tracking-wide">
            Tooth Extraction
            </h1>
          </div>
          <div className="my-7 relative overflow-hidden rounded-xl">
            <img
              className="h-[20rem] z-10 object-cover "
              src="https://gtkit.rometheme.pro/glinic/wp-content/uploads/sites/51/2024/06/Services-Image-2.jpg"
              alt=""
            />
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileHover={{ opacity: 1, y: 0, transition: { duration: 0.7 } }}
              className="bg-gradient-to-b from-[#f0f3f300] flex justify-center to-[#cc4444a4] absolute h-[100%] w-[100%] bottom-0 z-20"
            >
              <button className="border-[2px] rounded-lg bg-transparent hover:bg-[#8a1f31] hover:border-0 text-white text-[0.8em] tracking-wider transition-all uppercase px-[1.5rem] py-[1rem] items-center mt-[45%] h-fit text-bold font-[700]">
                READ MORE
              </button>
            </motion.div>
          </div>
          <div className="flex flex-col gap-3">
            <span className="flex gap-3 items-center">
              <IoIosCheckmarkCircle className="text-[#f03e3e] text-[1.6rem]" />
              <h1 className="text-[1.2rem] font-semibold tracking-wide text-[#252525]">
                Cardiology
              </h1>
            </span>
            <span className="flex gap-3 items-center">
              <IoIosCheckmarkCircle className="text-[#f03e3e] text-[1.6rem]" />
              <h1 className="text-[1.2rem] font-semibold tracking-wide text-[#252525]">
                Neurology
              </h1>
            </span>
          </div>
        </motion.div>
        <motion.div
          variants={{ once: true }}
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 0.6 } }}
          className="flex  flex-col bg-white border-b-[7px] max-md:p-[1rem] md:p-[2rem]  border-[#a7585c]  rounded-xl"
        >
          <div className="md:flex max-md:flex-col md:gap-5 max-md:gap-2 md:items-center text-[#252525]">
            <img
              src="https://gtkit.rometheme.pro/glinic/wp-content/uploads/sites/51/2024/06/Services-Icon-4.png"
              alt=""
              className="w-[5rem] max-md:w-[3rem]"
            />{" "}
            <h1 className="md:text-[1.6em] max-md:text-[1.2em] font-semibold tracking-wide">
            Braces
            </h1>
          </div>
          <div className="my-7 relative overflow-hidden rounded-xl">
            <img
              src="https://gtkit.rometheme.pro/glinic/wp-content/uploads/sites/51/2024/06/Services-Image-6.jpg"
              alt=""
              className="h-[20rem] z-10 object-cover "
            />
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileHover={{ opacity: 1, y: 0, transition: { duration: 0.7 } }}
              className="bg-gradient-to-b from-[#f0f3f300] flex justify-center to-[#cc4444a4] absolute h-[100%] w-[100%] bottom-0 z-20"
            >
              <button className="border-[2px] rounded-lg bg-transparent hover:bg-[#8a1f31] hover:border-0 text-white text-[0.8em] tracking-wider transition-all uppercase px-[1.5rem] py-[1rem] items-center mt-[45%] h-fit text-bold font-[700]">
                READ MORE
              </button>
            </motion.div>
          </div>
          <div className="flex flex-col gap-3">
            <span className="flex gap-3 items-center">
              <IoIosCheckmarkCircle className="text-[#f03e3e] text-[1.6rem]" />
              <h1 className="text-[1.2rem] font-semibold tracking-wide text-[#252525]">
                Emergency Rooms (ER)
              </h1>
            </span>
            <span className="flex gap-3 items-center">
              <IoIosCheckmarkCircle className="text-[#f03e3e] text-[1.6rem]" />
              <h1 className="text-[1.2rem] font-semibold tracking-wide text-[#252525]">
                Trauma Centers
              </h1>
            </span>
          </div>
        </motion.div>

        <motion.div
          variants={{ once: true }}
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 0.6 } }}
          className="flex flex-col bg-white border-b-[7px] p-[2rem]  border-[#a7585c]  rounded-xl"
        >
          <div className="flex gap-5 items-center text-[#252525]">
            <img
              src="https://gtkit.rometheme.pro/glinic/wp-content/uploads/sites/51/2024/06/Services-Icon-3.png"
              alt=""
              width={70}
            />{" "}
            <h1 className="text-[1.6em] font-semibold tracking-wide">
            Pediatrics
            </h1>
          </div>
          <div className="my-7 relative overflow-hidden rounded-xl">
            <img
              src="https://gtkit.rometheme.pro/glinic/wp-content/uploads/sites/51/2024/06/Services-Image-3.jpg"
              alt=""
              className="h-[20rem] z-10 object-cover "
            />
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileHover={{ opacity: 1, y: 0, transition: { duration: 0.7 } }}
              className="bg-gradient-to-b from-[#f0f3f300] flex justify-center to-[#cc4444a4] absolute h-[100%] w-[100%] bottom-0 z-20"
            >
              <button className="border-[2px] rounded-lg bg-transparent hover:bg-[#8a1f31] hover:border-0 text-white text-[0.8em] tracking-wider transition-all uppercase px-[1.5rem] py-[1rem] items-center mt-[45%] h-fit text-bold font-[700]">
                READ MORE
              </button>
            </motion.div>
          </div>
          <div className="flex flex-col gap-3">
            <span className="flex gap-3 items-center">
              <IoIosCheckmarkCircle className="text-[#f03e3e] text-[1.6rem]" />
              <h1 className="text-[1.2rem] font-semibold tracking-wide text-[#252525]">
                General Surgery
              </h1>
            </span>
            <span className="flex gap-3 items-center">
              <IoIosCheckmarkCircle className="text-[#f03e3e] text-[1.6rem]" />
              <h1 className="text-[1.2rem] font-semibold tracking-wide text-[#252525]">
                Specialized Surgery
              </h1>
            </span>
          </div>
        </motion.div>

        <motion.div
          variants={{ once: true }}
          initial={{ opacity: 0, x: 0 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 0.6 } }}
          className="flex flex-col bg-white border-b-[7px] p-[2rem]  border-[#a7585c] rounded-xl"
        >
          <div className="flex gap-5 items-center text-[#252525]">
            <img
              src="https://gtkit.rometheme.pro/glinic/wp-content/uploads/sites/51/2024/06/Services-Icon-2.png"
              alt=""
              width={70}
            />{" "}
            <h1 className="text-[1.6em] font-semibold tracking-wide">
            Denture's
            </h1>
          </div>
          <div className="my-7 relative overflow-hidden rounded-xl">
            <img
              src="https://gtkit.rometheme.pro/glinic/wp-content/uploads/sites/51/2024/06/Services-Image-4.jpg"
              alt=""
              className="h-[20rem] z-10 object-cover "
            />
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileHover={{ opacity: 1, y: 0, transition: { duration: 0.7 } }}
              className="bg-gradient-to-b from-[#f0f3f300] flex justify-center to-[#cc4444a4] absolute h-[100%] w-[100%] bottom-0 z-20"
            >
              <button className="border-[2px] rounded-lg bg-transparent hover:bg-[#8a1f31] hover:border-0 text-white text-[0.8em] tracking-wider transition-all uppercase px-[1.5rem] py-[1rem] items-center mt-[45%] h-fit text-bold font-[700]">
                READ MORE
              </button>
            </motion.div>
          </div>
          <div className="flex flex-col gap-3">
            <span className="flex gap-3 items-center">
              <IoIosCheckmarkCircle className="text-[#f03e3e] text-[1.6rem]" />
              <h1 className="text-[1.2rem] font-semibold tracking-wide text-[#252525]">
                Psychiatry
              </h1>
            </span>
            <span className="flex gap-3 items-center">
              <IoIosCheckmarkCircle className="text-[#f03e3e] text-[1.6rem]" />
              <h1 className="text-[1.2rem] font-semibold tracking-wide text-[#252525]">
                Psychology
              </h1>
            </span>
          </div>
        </motion.div>
        <motion.div
          variants={{ once: true }}
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 0.6 } }}
          className="flex flex-col bg-white border-b-[7px] p-[2rem]  border-[#a7585c] rounded-xl"
        >
          <div className="flex gap-5 items-center text-[#252525]">
            <img
              src="https://gtkit.rometheme.pro/glinic/wp-content/uploads/sites/51/2024/06/Services-Icon-5.png"
              alt=""
              width={70}
            />{" "}
            <h1 className="text-[1.6em] font-semibold tracking-normal">
            Cosmetic Treatment
            </h1>
          </div>
          <div className="my-7 relative overflow-hidden rounded-xl">
            <img
              src="	https://gtkit.rometheme.pro/glinic/wp-content/uploads/sites/51/2024/06/Services-Image-5.jpg"
              alt=""
              className="h-[20rem] z-10 object-cover "
            />
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileHover={{ opacity: 1, y: 0, transition: { duration: 0.7 } }}
              className="bg-gradient-to-b from-[#f0f3f300] flex justify-center to-[#cc4444a4] absolute h-[100%] w-[100%] bottom-0 z-20"
            >
              <button className="border-[2px] rounded-lg bg-transparent hover:bg-[#8a1f31] hover:border-0 text-white text-[0.8em] tracking-wider transition-all uppercase px-[1.5rem] py-[1rem] items-center mt-[45%] h-fit text-bold font-[700]">
                READ MORE
              </button>
            </motion.div>
          </div>
          <div className="flex flex-col gap-3">
            <span className="flex gap-3 items-center">
              <IoIosCheckmarkCircle className="text-[#f03e3e] text-[1.6rem]" />
              <h1 className="text-[1.2rem] font-semibold tracking-wide text-[#252525]">
                General Dentistry
              </h1>
            </span>
            <span className="flex gap-3 items-center">
              <IoIosCheckmarkCircle className="text-[#f03e3e] text-[1.6rem]" />
              <h1 className="text-[1.2rem] font-semibold tracking-wide text-[#252525]">
                Specialized Dentistry
              </h1>
            </span>
          </div>
        </motion.div>
        <motion.div
          variants={{ once: true }}
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 0.6 } }}
          className="flex flex-col bg-white border-b-[7px] max-md:p-[1rem] md:p-[2rem]  border-[#a7585c]  rounded-xl"
        >
          <div className="md:flex max-md:flex-col gap-5 items-center text-[#252525]">
            <img
              src="https://gtkit.rometheme.pro/glinic/wp-content/uploads/sites/51/2024/06/Services-Icon-1.png"
              alt=""
              className="w-[5rem] max-md:w-[3rem]"
            />{" "}
            <h1 className="md:text-[1.6em] max-md:text-[1.2em] font-semibold tracking-wide">
            Implants
            </h1>
          </div>
          <div className="my-7 relative overflow-hidden rounded-xl">
            <img
              src="https://gtkit.rometheme.pro/glinic/wp-content/uploads/sites/51/2024/06/Services-Image-1.jpg"
              alt=""
              className="h-[20rem] z-10 object-cover "
            />
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileHover={{ opacity: 1, y: 0, transition: { duration: 0.7 } }}
              className="bg-gradient-to-b from-[#f0f3f300] flex justify-center to-[#cc4444a4] absolute h-[100%] w-[100%] bottom-0 z-20"
            >
              <button className="border-[2px] rounded-lg bg-transparent hover:bg-[#8a1f31] hover:border-0 text-white text-[0.8em] tracking-wider transition-all uppercase px-[1.5rem] py-[1rem] items-center mt-[45%] h-fit text-bold font-[700]">
                READ MORE
              </button>
            </motion.div>
          </div>
          <div className="flex flex-col gap-3">
            <span className="flex gap-3 items-center">
              <IoIosCheckmarkCircle className="text-[#f03e3e] text-[1.6rem]" />
              <h1 className="text-[1.2rem] font-semibold tracking-wide text-[#252525]">
                General Practitioners (GPs)
              </h1>
            </span>
            <span className="flex gap-3 items-center">
              <IoIosCheckmarkCircle className="text-[#f03e3e] text-[1.6rem]" />
              <h1 className="text-[1.2rem] font-semibold tracking-wide text-[#252525]">
                Preventive Care
              </h1>
            </span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 0 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 0.6 } }}
          className="flex flex-col bg-white border-b-[7px] max-md:p-[1rem] md:p-[2rem]  border-[#a7585c]  rounded-xl"
        >
          <div className="flex max-md:flex-col max-md:gap-2 md:gap-5  text-[#252525]">
            <img
              src="https://gtkit.rometheme.pro/glinic/wp-content/uploads/sites/51/2024/06/Hero-Icon-5.png"
              alt=""
              className="w-[5rem] max-md:w-[3rem]"
            />{" "}
            <h1 className="md:text-[1.6em] max-md:text-[1.2em] font-semibold tracking-wide">
            Gum Diseases
            </h1>
          </div>
          <div className="my-7 relative overflow-hidden rounded-xl">
            <img
              className="h-[20rem] z-10 object-cover "
              src="https://gtkit.rometheme.pro/glinic/wp-content/uploads/sites/51/2024/06/Services-Image-2.jpg"
              alt=""
            />
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileHover={{ opacity: 1, y: 0, transition: { duration: 0.7 } }}
              className="bg-gradient-to-b from-[#f0f3f300] flex justify-center to-[#cc4444a4] absolute h-[100%] w-[100%] bottom-0 z-20"
            >
              <button className="border-[2px] rounded-lg bg-transparent hover:bg-[#8a1f31] hover:border-0 text-white text-[0.8em] tracking-wider transition-all uppercase px-[1.5rem] py-[1rem] items-center mt-[45%] h-fit text-bold font-[700]">
                READ MORE
              </button>
            </motion.div>
          </div>
          <div className="flex flex-col gap-3">
            <span className="flex gap-3 items-center">
              <IoIosCheckmarkCircle className="text-[#f03e3e] text-[1.6rem]" />
              <h1 className="text-[1.2rem] font-semibold tracking-wide text-[#252525]">
                Cardiology
              </h1>
            </span>
            <span className="flex gap-3 items-center">
              <IoIosCheckmarkCircle className="text-[#f03e3e] text-[1.6rem]" />
              <h1 className="text-[1.2rem] font-semibold tracking-wide text-[#252525]">
                Neurology
              </h1>
            </span>
          </div>
        </motion.div>
        
      </div>
      {/* <div className=" flex max-w-[1350px] max-xl:hidden w-[100%] items-center overflow-hidden justify-center gap-10 px-[3%] mt-[2rem]">
        <motion.div
          variants={{ once: true }}
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 0.6 } }}
          className="flex flex-col bg-white border-b-[7px] p-[2rem]  border-[#a7585c] w-[33%] rounded-xl"
        >
          <div className="flex gap-5 items-center text-[#252525]">
            <img
              src="https://gtkit.rometheme.pro/glinic/wp-content/uploads/sites/51/2024/06/Services-Icon-3.png"
              alt=""
              width={70}
            />{" "}
            <h1 className="text-[1.6em] font-semibold tracking-wide">
            Pediatrics
            </h1>
          </div>
          <div className="my-7 relative overflow-hidden rounded-xl">
            <img
              src="https://gtkit.rometheme.pro/glinic/wp-content/uploads/sites/51/2024/06/Services-Image-3.jpg"
              alt=""
              className="h-[20rem] z-10 object-cover "
            />
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileHover={{ opacity: 1, y: 0, transition: { duration: 0.7 } }}
              className="bg-gradient-to-b from-[#f0f3f300] flex justify-center to-[#cc4444a4] absolute h-[100%] w-[100%] bottom-0 z-20"
            >
              <button className="border-[2px] rounded-lg bg-transparent hover:bg-[#8a1f31] hover:border-0 text-white text-[0.8em] tracking-wider transition-all uppercase px-[1.5rem] py-[1rem] items-center mt-[45%] h-fit text-bold font-[700]">
                READ MORE
              </button>
            </motion.div>
          </div>
          <div className="flex flex-col gap-3">
            <span className="flex gap-3 items-center">
              <IoIosCheckmarkCircle className="text-[#f03e3e] text-[1.6rem]" />
              <h1 className="text-[1.2rem] font-semibold tracking-wide text-[#252525]">
                General Surgery
              </h1>
            </span>
            <span className="flex gap-3 items-center">
              <IoIosCheckmarkCircle className="text-[#f03e3e] text-[1.6rem]" />
              <h1 className="text-[1.2rem] font-semibold tracking-wide text-[#252525]">
                Specialized Surgery
              </h1>
            </span>
          </div>
        </motion.div>

        <motion.div
          variants={{ once: true }}
          initial={{ opacity: 0, x: 0 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 0.6 } }}
          className="flex flex-col bg-white border-b-[7px] p-[2rem]  border-[#a7585c] w-[33%] rounded-xl"
        >
          <div className="flex gap-5 items-center text-[#252525]">
            <img
              src="https://gtkit.rometheme.pro/glinic/wp-content/uploads/sites/51/2024/06/Services-Icon-2.png"
              alt=""
              width={70}
            />{" "}
            <h1 className="text-[1.6em] font-semibold tracking-wide">
            Denture's
            </h1>
          </div>
          <div className="my-7 relative overflow-hidden rounded-xl">
            <img
              src="https://gtkit.rometheme.pro/glinic/wp-content/uploads/sites/51/2024/06/Services-Image-4.jpg"
              alt=""
              className="h-[20rem] z-10 object-cover "
            />
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileHover={{ opacity: 1, y: 0, transition: { duration: 0.7 } }}
              className="bg-gradient-to-b from-[#f0f3f300] flex justify-center to-[#cc4444a4] absolute h-[100%] w-[100%] bottom-0 z-20"
            >
              <button className="border-[2px] rounded-lg bg-transparent hover:bg-[#8a1f31] hover:border-0 text-white text-[0.8em] tracking-wider transition-all uppercase px-[1.5rem] py-[1rem] items-center mt-[45%] h-fit text-bold font-[700]">
                READ MORE
              </button>
            </motion.div>
          </div>
          <div className="flex flex-col gap-3">
            <span className="flex gap-3 items-center">
              <IoIosCheckmarkCircle className="text-[#f03e3e] text-[1.6rem]" />
              <h1 className="text-[1.2rem] font-semibold tracking-wide text-[#252525]">
                Psychiatry
              </h1>
            </span>
            <span className="flex gap-3 items-center">
              <IoIosCheckmarkCircle className="text-[#f03e3e] text-[1.6rem]" />
              <h1 className="text-[1.2rem] font-semibold tracking-wide text-[#252525]">
                Psychology
              </h1>
            </span>
          </div>
        </motion.div>
        <motion.div
          variants={{ once: true }}
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 0.6 } }}
          className="flex flex-col bg-white border-b-[7px] p-[2rem]  border-[#a7585c] w-[33%] rounded-xl"
        >
          <div className="flex gap-5 items-center text-[#252525]">
            <img
              src="https://gtkit.rometheme.pro/glinic/wp-content/uploads/sites/51/2024/06/Services-Icon-5.png"
              alt=""
              width={70}
            />{" "}
            <h1 className="text-[1.6em] font-semibold tracking-wide">
              Dental Services
            </h1>
          </div>
          <div className="my-7 relative overflow-hidden rounded-xl">
            <img
              src="	https://gtkit.rometheme.pro/glinic/wp-content/uploads/sites/51/2024/06/Services-Image-5.jpg"
              alt=""
              className="h-[20rem] z-10 object-cover "
            />
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileHover={{ opacity: 1, y: 0, transition: { duration: 0.7 } }}
              className="bg-gradient-to-b from-[#f0f3f300] flex justify-center to-[#cc4444a4] absolute h-[100%] w-[100%] bottom-0 z-20"
            >
              <button className="border-[2px] rounded-lg bg-transparent hover:bg-[#8a1f31] hover:border-0 text-white text-[0.8em] tracking-wider transition-all uppercase px-[1.5rem] py-[1rem] items-center mt-[45%] h-fit text-bold font-[700]">
                READ MORE
              </button>
            </motion.div>
          </div>
          <div className="flex flex-col gap-3">
            <span className="flex gap-3 items-center">
              <IoIosCheckmarkCircle className="text-[#f03e3e] text-[1.6rem]" />
              <h1 className="text-[1.2rem] font-semibold tracking-wide text-[#252525]">
                General Dentistry
              </h1>
            </span>
            <span className="flex gap-3 items-center">
              <IoIosCheckmarkCircle className="text-[#f03e3e] text-[1.6rem]" />
              <h1 className="text-[1.2rem] font-semibold tracking-wide text-[#252525]">
                Specialized Dentistry
              </h1>
            </span>
          </div>
        </motion.div>
      </div> */}
    </div>
  );
}
