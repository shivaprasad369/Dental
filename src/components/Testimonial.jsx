import { Divider } from "@nextui-org/react";
import { motion } from "framer-motion";
import React from "react";
import { FaQuoteRight } from "react-icons/fa6";

export default function Testimonial() {
  return (
    <div className="bg-[#c8000026] overflow-hidden md:py-[6em] py-[3em] px-[4%] w-[100vw] h-[100%] ">
      <div className="flex flex-col gap-3">
        <h1 className="text-[1.2em] font-semibold tracking-widest uppercase text-[#f83b3b]">
          Testimonial
        </h1>
        <h1 className="text-[#252525] md:text-[3rem] text-[2.5rem] max-md:leading-[3rem] font-[700]">
          Patient Stories & Experiences
        </h1>
        <div className="w-[100%] xl:flex max-xl:flex-col gap-5">
          <motion.div
            variants={{ once: true }}
            initial={{ opacity: 0, x: -200 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.6, type: "tween" },
            }}
            className="xl:w-[50%] flex flex-col gap-2 p-[2rem] bg-[#80241d] rounded-xl h-[100%]"
          >
            <FaQuoteRight className="text-white text-[4rem]" />
            <h1 className="text-[1.5em] font-[600] text-white">
              The doctors and staff are professional, compassionate, and
              attentive to my needs.
            </h1>
            <p className="italic text-[1em] text-white tracking-wider">
              "Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Etiam
              eleife tellus turpis, efficitur fermentum massa rhoncus cursus.
              Donec efficit vene natis erat sed tristique sed consec tetur."
            </p>
            <Divider
              sx={{ border: "white", paddingTop: "10px" }}
              className="my-6"
            />
            <div className="md:flex max-md:flex-col max-md:gap-5 gap-3 items-center">
              <img
                src="https://gtkit.rometheme.pro/glinic/wp-content/uploads/sites/51/2024/06/Testimonial-Image-2.jpg"
                width={60}
                alt=""
                className="rounded-full"
              />
              <div className="flex flex-col max-md:mt-2 gap-1 ">
                <h1 className="text-white leading-[1.3em] font-semibold text-[1.2em] tracking-wider">
                  Mark Thompson
                </h1>
                <span className="text-white text-[1em] tracking-wide leading-[1.1em] ">
                  Patient
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={{ once: true }}
            initial={{ opacity: 0, x: 200 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.6, type: "tween" },
            }}
            className="xl:w-[50%] max-xl:mt-[2rem] flex flex-col gap-2 p-[2rem] bg-[#80241d] rounded-xl h-[100%]"
          >
            <FaQuoteRight className="text-white text-[4rem]" />
            <h1 className="text-[1.5em] font-[600] text-white">
              The medical team made me feel comfortable and confident throughout
              the entire process.
            </h1>
            <p className="italic text-[1em] text-white tracking-wider">
              "Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Etiam
              eleife tellus turpis, efficitur fermentum massa rhoncus cursus.
              Donec efficit vene natis erat sed tristique sed consec tetur."
            </p>
            <Divider
              sx={{ border: "white", paddingTop: "10px" }}
              className="my-6"
            />
            <div className="md:flex max-md:flex-col gap-3 items-center">
              <img
                src="https://gtkit.rometheme.pro/glinic/wp-content/uploads/sites/51/2024/06/Testimonial-Image-2.jpg"
                width={60}
                alt=""
                className="rounded-full"
              />
              <div className="flex flex-col max-md:mt-2 gap-1 ">
                <h1 className="text-white leading-[1.3em] font-semibold text-[1.2em] tracking-wider">
                  Mark Thompson
                </h1>
                <span className="text-white text-[1em] tracking-wide leading-[1.1em] ">
                  Patient
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
