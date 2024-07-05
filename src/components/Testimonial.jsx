import { Divider } from "@nextui-org/react";
import { motion } from "framer-motion";
import React from "react";
import { FaQuoteRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
export default function Testimonial() {
  return (
    <div className="bg-[#c8000026] overflow-hidden md:py-[6em] py-[3em] px-[4%] w-[100vw] h-[100%] ">
      <div className="flex flex-col gap-3 overflow-hidden">
        <h1 className="text-[1.2em] font-semibold tracking-widest uppercase text-[#f83b3b]">
          Testimonial
        </h1>
        <h1 className="text-[#252525] md:text-[3rem] text-[2.5rem] max-md:leading-[3rem] font-[700]">
          Patient Stories & Experiences
        </h1>
        <div className="xl:hidden"> 

        <Swiper className="mySwiper flex overflow-hidden  w-[100%] gap-10">
        <SwiperSlide 
        slidesPerView={2}
        spaceBetween={20}
          breakpoints={{
        576: {
       
          slidesPerView: 2,
        },
        768: {
      
          slidesPerView: 1,
        },
        1024: {
         
          slidesPerView: 2,
        },
        1366: {
         
          slidesPerView: 2,
        },

        }} className="flex  gap-5 ">
      
          <motion.div
            variants={{ once: true }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.6, type: "tween" },
            }}
            className="xl:w-[50%] max-xl:w-[95%] max-xl:ml-[2.5%] flex flex-col gap-2 p-[2rem] bg-[#80241d] rounded-xl h-[100%]"
          >
            <FaQuoteRight className="text-white text-[4rem]" />
            <h1 className="text-[1.5em] font-[600] text-white">
              I had an excellent experience. The staff was friendly and
              welcoming, and the clinic was modern and clean.
            </h1>
            <p className="italic text-[1em] text-white tracking-wider">
              "And their team were skilled, caring, and took the time to explain
              everything. The treatment was painless, and the clinic followed
              strict hygiene protocols. They were transparent about costs. I
              highly recommend for their outstanding dental care!/"
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
                  RITVIK SHETTY
                </h1>
                <span className="text-white text-[1em] tracking-wide leading-[1.1em] ">
                  Patient
                </span>
              </div>
            </div>
          </motion.div>
</SwiperSlide>
<SwiperSlide>
          <motion.div
            variants={{ once: true }}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.6, type: "tween" },
            }}
            className="xl:w-[50%] max-xl:w-[95%] max-xl:ml-[2.5%] flex flex-col gap-2 p-[2rem] bg-[#80241d] rounded-xl h-[100%]"
          >
            <FaQuoteRight className="text-white text-[4rem]" />
            <h1 className="text-[1.5em] font-[600] text-white">
              The staff was friendly and professional, making me feel
              comfortable throughout the visit.
            </h1>
            <p className="italic text-[1em] text-white xl:mt-[2rem] tracking-wider">
              "I recently had an exceptional experience here. The staff was
              friendly and professional, making me feel comfortable throughout
              the visit. The dentist's expertise and attention to detail were
              truly impressive, leaving me with a confident smile and a positive
              impression of the clinic "
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
                RAHUL NAIK
                </h1>
                <span className="text-white text-[1em] tracking-wide leading-[1.1em] ">
                  Patient
                </span>
              </div>
            </div>
          </motion.div>
        
        </SwiperSlide>
        <SwiperSlide className="flex  gap-5">
       
          <motion.div
            variants={{ once: true }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.6, type: "tween" },
            }}
            className="xl:w-[50%] max-xl:w-[95%] max-xl:ml-[2.5%] flex flex-col gap-2 p-[2rem] bg-[#80241d] rounded-xl h-[100%]"
          >
            <FaQuoteRight className="text-white text-[4rem]" />
            <h1 className="text-[1.5em] font-[600] text-white">
            Dr. Ganeshkar is well experienced, he is very friendly and polite. the clinic is clean and hygienic.
            </h1>
            <p className="italic text-[1em] text-white tracking-wider">
              "I
got my braces here, I never faced any problem throughout my treatment of 2 years, I was even
pre informed about my appointments and adding on the benefits, the required latest machines
are also there. Had a really great experience as this is one of the best clinics in our city.
"
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
                YUVI USHA
                </h1>
                <span className="text-white text-[1em] tracking-wide leading-[1.1em] ">
                  Patient
                </span>
              </div>
            </div>
          </motion.div>
</SwiperSlide>
<SwiperSlide>
          <motion.div
            variants={{ once: true }}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.6, type: "tween" },
            }}
            className="xl:w-[50%]  max-xl:ml-[2.5%] max-xl:w-[95%] flex flex-col gap-2 p-[2rem] bg-[#80241d] rounded-xl h-[100%]"
          >
            <FaQuoteRight className="text-white text-[4rem]" />
            <h1 className="text-[1.5em] font-[600] text-white">
            I recently had my wisdom tooth extraction and surgery at The Tooth Place and I couldn't be
            happier with the level of care and expertise provided by the entire team.
            </h1>
            <p className="italic text-[1em] text-white xl:mt-[2rem] tracking-wider">
              " From the moment I
walked in, I felt welcomed and reassured by the friendly staff. The dentist and team were
professional and attentive throughout the procedure, making sure I was comfortable and wellinformed every step of the way. I am impressed with the level of care and professionalism of this
dental clinic and would highly recommend them to anyone in need of dental services. Thank you,
The Tooth Place!. "
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
                ABRAR KOPPAL
                </h1>
                <span className="text-white text-[1em] tracking-wide leading-[1.1em] ">
                  Patient
                </span>
              </div>
            </div>
          </motion.div>
      
        </SwiperSlide>
        <SwiperSlide>
          <motion.div
            variants={{ once: true }}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.6, type: "tween" },
            }}
            className="xl:w-[50%]  max-xl:ml-[2.5%] max-xl:w-[95%] flex flex-col gap-2 p-[2rem] bg-[#80241d] rounded-xl h-[100%]"
          >
            <FaQuoteRight className="text-white text-[4rem]" />
            <h1 className="text-[1.5em] font-[600] text-white">
            Friendly staff with Awesome Dentist... The doctor is Very professional and Straightforward of
what needs to be done... .
            </h1>
            <p className="italic text-[1em] text-white xl:mt-[2rem] tracking-wider">
              " . I live 80-90miles away but I’m more comfortable coming to this Dental
clinic than the One across my Street...want to straighten your teeth? Walk straight to The Tooth
place...! I highly recommend The Tooth place Dental to my friends."
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
                MARSHAL ANTONY

                </h1>
                <span className="text-white text-[1em] tracking-wide leading-[1.1em] ">
                  Patient
                </span>
              </div>
            </div>
          </motion.div>
      
        </SwiperSlide>
        </Swiper>
        </div>



        <div className="max-xl:hidden"> 

        <Swiper  slidesPerView={2}
     
        className="mySwiper flex  w-[100%] gap-10">
         

        <SwiperSlide>
      
          <motion.div
            variants={{ once: true }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.6, type: "tween" },
            }}
            className="w-[95%] max-xl:ml-[2.5%] flex flex-col gap-2 p-[2rem] bg-[#80241d] rounded-xl h-[100%]"
          >
            <FaQuoteRight className="text-white text-[4rem]" />
            <h1 className="text-[1.5em] font-[600] text-white">
              I had an excellent experience. The staff was friendly and
              welcoming, and the clinic was modern and clean.
            </h1>
            <p className="italic text-[1em] text-white tracking-wider">
              "And their team were skilled, caring, and took the time to explain
              everything. The treatment was painless, and the clinic followed
              strict hygiene protocols. They were transparent about costs. I
              highly recommend for their outstanding dental care!/"
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
                  RITVIK SHETTY
                </h1>
                <span className="text-white text-[1em] tracking-wide leading-[1.1em] ">
                  Patient
                </span>
              </div>
            </div>
          </motion.div>
</SwiperSlide>
<SwiperSlide>
          <motion.div
            variants={{ once: true }}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.6, type: "tween" },
            }}
            className="w-[95%] max-xl:ml-[2.5%] flex flex-col gap-2 p-[2rem] bg-[#80241d] rounded-xl h-[100%]"
          >
            <FaQuoteRight className="text-white text-[4rem]" />
            <h1 className="text-[1.5em] font-[600] text-white">
              The staff was friendly and professional, making me feel
              comfortable throughout the visit.
            </h1>
            <p className="italic text-[1em] text-white xl:mt-[1rem] tracking-wider">
              "I recently had an exceptional experience here. The staff was
              friendly and professional, making me feel comfortable throughout
              the visit. The dentist's expertise and attention to detail were
              truly impressive, leaving me with a confident smile and a positive
              impression of the clinic "
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
                RAHUL NAIK
                </h1>
                <span className="text-white text-[1em] tracking-wide leading-[1.1em] ">
                  Patient
                </span>
              </div>
            </div>
          </motion.div>
        
        </SwiperSlide>
       
       

<SwiperSlide>

  <motion.div
    variants={{ once: true }}
    initial={{ opacity: 0, x: -20 }}
    whileInView={{
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, type: "tween" },
    }}
    className="w-[95%] max-xl:ml-[2.5%] flex flex-col gap-2 p-[2rem] bg-[#80241d] rounded-xl h-[100%]"
  >
    <FaQuoteRight className="text-white text-[4rem]" />
    <h1 className="text-[1.5em] font-[600] text-white">
    Dr. Ganeshkar is well experienced, he is very friendly and polite. the clinic is clean and hygienic
    </h1>
    <p className="italic text-[1em] text-white tracking-wider">
      " I
got my braces here, I never faced any problem throughout my treatment of 2 years, I was even
pre informed about my appointments and adding on the benefits, the required latest machines
are also there. Had a really great experience as this is one of the best clinics in our city.
"
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
        YUVI USHA
        </h1>
        <span className="text-white text-[1em] tracking-wide leading-[1.1em] ">
          Patient
        </span>
      </div>
    </div>
  </motion.div>
</SwiperSlide>
<SwiperSlide>

  <motion.div
    variants={{ once: true }}
    initial={{ opacity: 0, x: 20 }}
    whileInView={{
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, type: "tween" },
    }}
    className="w-[95%] max-xl:ml-[2.5%] flex flex-col gap-2 p-[1rem] bg-[#80241d] rounded-xl h-[100%]"
  >
    <FaQuoteRight className="text-white text-[4rem]" />
    <h1 className="text-[1.5em] font-[600] text-white">
    I recently had my wisdom tooth extraction and surgery at The Tooth Place and I couldn't be
    happier with the level of care and expertise provided by the entire team.
    </h1>
    <p className="italic text-[1em] text-white  tracking-wider">
      "From the moment I
walked in, I felt welcomed and reassured by the friendly staff. The dentist and team were
professional and attentive throughout the procedure, making sure I was comfortable and wellinformed every step of the way. I am impressed with the level of care and professionalism of this
dental clinic and would highly recommend them to anyone in need of dental services. Thank you,
The Tooth Place!
 "
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
        ABRAR KOPPAL
        </h1>
        <span className="text-white text-[1em] tracking-wide leading-[1.1em] ">
          Patient
        </span>
      </div>
    </div>
  </motion.div>

</SwiperSlide>
<SwiperSlide>

  <motion.div
    variants={{ once: true }}
    initial={{ opacity: 0, x: 20 }}
    whileInView={{
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, type: "tween" },
    }}
    className="w-[95%] max-xl:ml-[2.5%] flex flex-col gap-2 p-[1rem] bg-[#80241d] rounded-xl h-[100%]"
  >
    <FaQuoteRight className="text-white text-[4rem]" />
    <h1 className="text-[1.5em] font-[600] text-white">
    Friendly staff with Awesome Dentist... The doctor is Very professional and Straightforward of
    what needs to be done...
    </h1>
    <p className="italic text-[1em] text-white  tracking-wider">
      "I live 80-90miles away but I’m more comfortable coming to this Dental
clinic than the One across my Street...want to straighten your teeth? Walk straight to The Tooth
place...! I highly recommend The Tooth place Dental to my friends
 "
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
        MARSHAL ANTONY
        </h1>
        <span className="text-white text-[1em] tracking-wide leading-[1.1em] ">
          Patient
        </span>
      </div>
    </div>
  </motion.div>

</SwiperSlide>
<SwiperSlide>

  <motion.div
    variants={{ once: true }}
    initial={{ opacity: 0, x: 20 }}
    whileInView={{
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, type: "tween" },
    }}
    className="w-[95%] max-xl:ml-[2.5%] flex flex-col gap-2 p-[1rem] bg-[#80241d] rounded-xl h-[100%]"
  >
    <FaQuoteRight className="text-white text-[4rem]" />
    <h1 className="text-[1.5em] font-[600] text-white">
    The Tooth Place is the ultimate destination for all our dental problems.
    </h1>
    <p className="italic text-[1em] text-white  tracking-wider">
      "With high class
equipment’s and latest technology-based treatment plans, the centre caters all kinds of dental
issues such as fillings, RCT, braces and many more. More over the hygienic and friendly
environment Is the prime reason for us to visit it without any hesitation.
 "
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
        SHAKUNTALA SHENDRE
        </h1>
        <span className="text-white text-[1em] tracking-wide leading-[1.1em] ">
          Patient
        </span>
      </div>
    </div>
  </motion.div>

</SwiperSlide>
    
        

        </Swiper>
        </div>
      </div>
    </div>
  );
}
