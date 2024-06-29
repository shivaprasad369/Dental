import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";
import CustomizedAccordions from "./Prgressbar";
export default function Why() {
  const [ref, inView] = useInView({
    threshold: 1.0,
  });
  // const defaultContent =
  // "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <div className="bg1 h-[100%] w-[100vw] flex justify-center   relative z-20">
      <div className="bg-[#dbbdbdab] w-[100%] h-[100%] absolute z-10 " />
      <div
        className="w-[100%] h-[100%] xl:flex max-xl:flex-col gap-10 py-[3em] md:py-[7em]  px-[5%]"
        style={{ zIndex: "inherit" }}
      >
        <motion.div variants={{once:true}} initial={{opacity:0,x:-200}} whileInView={{opacity:1,x:0,transition:{duration:0.6,type:'tween'}}} className="xl:w-[50%] h-[100%]  relative">
          <img
            src="https://gtkit.rometheme.pro/glinic/wp-content/uploads/sites/51/2024/06/Why-Choose-Us-Image.jpg"
            alt=""
            className="w-[80%] object-cover rounded-xl ml-[8%]"
          />
          <img
            src="https://gtkit.rometheme.pro/glinic/wp-content/uploads/sites/51/2024/06/Why-Choose-Us-Icon.png"
            alt=""
            className="w-[6rem] absolute top-[2.5rem] md:right-[5%] max-md:right-[0%]"
          />
          <div className="absolute flex flex-col md:gap-3 gap-4 md:bottom-[-15%] max-md:bottom-[-40%] p-[7%] rounded-xl border-b-[5px] border-[#F01A22] left-0 h-fit md:w-[70%] max-md:w-[80%] bg-white ">
            <div className="flex flex-col ">
              <div className="flex justify-between  w-[100%] text-[0.8em] md:text-[1.1em] md:leading-[2.5em] font-[600]">
                <h1>Patient Care Excellence</h1>
                <h1>95%</h1>
              </div>
              <motion.div
                ref={ref}
                style={{
                  width: "100%",
                  height: "10px",
                  borderRadius: "10px",
                }}
                className="bg-slate-200"
              >
                <motion.div
                  style={{
                    width: "0%",
                    height: "100%",
                    borderRadius: "10px",
                  }}
                  className="bg-[#F01A22]"
                  animate={inView ? { width: "95%" } : { width: "0%" }}
                  transition={{ duration: 1 }}
                />
              </motion.div>
            </div>
            <div className="flex flex-col ">
              <div className="flex justify-between w-[100%] text-[0.8em] md:text-[1.1em] md:leading-[2.5em] font-[600]">
                <h1>Advanced Diagnostic Accuracy</h1>
                <h1>90%</h1>
              </div>
              <motion.div
                ref={ref}
                style={{
                  width: "100%",
                  height: "10px",
                  borderRadius: "10px",
                }}
                className="bg-slate-200"
              >
                <motion.div
                  style={{
                    width: "0%",
                    height: "100%",
                    borderRadius: "10px",
                  }}
                  className="bg-[#F01A22]"
                  animate={inView ? { width: "90%" } : { width: "0%" }}
                  transition={{ duration: 1 }}
                />
              </motion.div>
            </div>
            <div className="flex flex-col ">
              <div className="flex justify-between w-[100%] text-[0.8em] md:text-[1.1em] md:leading-[2.5em] font-[600]">
                <h1>Specialized Treatment Expertise</h1>
                <h1>92%</h1>
              </div>
              <motion.div
                ref={ref}
                style={{
                  width: "100%",
                  height: "10px",
                  borderRadius: "10px",
                }}
                className="bg-slate-200"
              >
                <motion.div
                  style={{
                    width: "0%",
                    height: "100%",
                    borderRadius: "10px",
                  }}
                  className="bg-[#F01A22]"
                  animate={inView ? { width: "92%" } : { width: "0%" }}
                  transition={{ duration: 1 }}
                />
              </motion.div>
            </div>
          </div>
        </motion.div>

        <div className="xl:w-[50%] max-md:mt-[10rem] max-xl:mt-[8rem]">
          <div className="flex flex-col gap-5"> 
            <h1 className="text-[1.2em] tracking-widest font-bold text-[#F01A22]">WHY CHOOSE US</h1>
            <h1 className="text-[#252525] md:text-[3rem] text-[2.5rem] font-[700] leading-[3rem] md:leading-[1.2em]">Dedicated to Quality Healthcare</h1>
            <p className="text-[1.1em] tracking-wider text-slate-500 leading-[1.5em]">
            Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Fusce vitae commodo ipsum, eu ullam corper magna. Nam non posuere lacus.
            </p>
            <CustomizedAccordions/>
          </div>
        </div>
      </div>
    </div>
  );
}
