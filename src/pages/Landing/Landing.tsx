import { motion, useInView } from "framer-motion";
import { GreenButton, TransparentButton } from "../../shared/UI/CustomButtons";
import Footer from "../../widgets/Footer";
import Header from "../../widgets/Header";

import sulac from './sulac canyon.png'
import { GiColombianStatue } from "react-icons/gi";
import { PiIdentificationCardFill } from "react-icons/pi";
import { useRef } from "react";
import { downAnimText, upAnimText } from "../../app/MAnimations/animations";




const cards = [
   {
      image: sulac,
      country: 'Sulac Canyon'
   }, {
      image: sulac,
      country: 'Sulac Canyon'
   }, {
      image: sulac,
      country: 'Sulac Canyon'
   }, {
      image: sulac,
      country: 'Sulac Canyon'
   }, {
      image: sulac,
      country: 'Sulac Canyon'
   }, {
      image: sulac,
      country: 'Sulac Canyon'
   }, {
      image: sulac,
      country: 'Sulac Canyon'
   }, {
      image: sulac,
      country: 'Sulac Canyon'
   }, {
      image: sulac,
      country: 'Sulac Canyon'
   }
]


const Landing = () => {
   const ref = useRef(null)
   const isInView = useInView(ref)



   return (
      <div className="bg-[#F5F5F5] ">
         <motion.main
            initial="hidden"
            animate="visible"
            className="max-w-[1420px] px-[40px] m-auto ">
            <motion.section
               variants={upAnimText}
               className="filter relative text-[white] bg-back-landing-banner bg-center rounded-[24px] h-[599px] bg-cover bg-no-repeat ">
               <div className="relative">
                  <Header transparent />
                  <div className="text-center pt-[84px] ">
                     <h3 className="text-[45px]">Helping Others</h3>
                     <h1 className="font-trade-gotic text-[80px] leading-[5.5rem]">LIVE & TRAVEL</h1>
                     <p className="text-[20px] font-montserrat-400" >Special offers to suit your plan</p>
                  </div>
               </div>


            </motion.section>
            <div className="container">
               <section>
                  <motion.div variants={downAnimText} className="flex pt-[74px] justify-center relative">
                     <div className="items-center flex flex-col">
                        <p className="text-[32px] font-montserrat-600">Sights you can see</p>
                        <p className="">Frequently discussed</p>
                     </div>
                     <div className="absolute right-0 bottom-0">
                        <TransparentButton >See more places</TransparentButton>
                     </div>
                  </motion.div>


                  {!cards ? '' :

                     <div

                        ref={ref} className="md:grid-cols-2 lg:grid-cols-3 grid pt-[40px] gap-[32px]">
                        {cards.map((c, i) => (
                           <motion.div variants={upAnimText} custom={i + 1} className="flex gap-4 font-montserrat-600 bg-[white] max-w-[390px] p-4 rounded-2xl drop-shadow-md">
                              <img src={c.image} alt="" />
                              <div className="flex flex-col justify-center">
                                 <p> {c.country} </p>
                                 <p className="text-[14px]">Statues • Museums • Attractions</p>
                              </div>
                           </motion.div>
                        ))}
                     </div>
                  }
               </section>

               <section ref={ref} className="flex  gap-[24px] pt-[80px] text-[white] text-center">
                  <div
                     className={`pt-[360px] bg-cover bg-attractions w-1/2 rounded-[20px] h-[550px] duration-700 transition-all ${isInView ? '' : '-translate-x-[200px] opacity-0'}`}>
                     <h3 className="text-[40px] font-trade-gotic">
                        Take a tour
                     </h3>
                     <p className="font-montserrat-reg">
                        Find a guide in the city or country where you want to sightsee!
                     </p>
                     <div className="w-[144px] text-[14px] text-[black] m-auto pt-[16px]">
                        <GreenButton img={<GiColombianStatue />}>Show Tours</GreenButton>
                     </div>
                  </div>
                  <div
                     className={`pt-[360px] bg-cover bg-guide w-1/2 rounded-[20px] h-[550px] duration-700	transition-all ${isInView ? '' : 'translate-x-[200px] opacity-0'}`}>
                     <h3 className="text-[40px] font-trade-gotic">
                        Become a tour guide
                     </h3>
                     <p className="font-montserrat-reg">
                        Fill out the form and become a tour guide in your city!
                     </p>
                     <div className="w-[200px] text-[black] text-[14px] m-auto pt-[16px]">
                        <GreenButton img={<PiIdentificationCardFill />}><p>Become a Tour Guide</p></GreenButton>
                     </div>
                  </div>
               </section>
            </div>
         </motion.main >
         <Footer />

      </div >

   );
}

export default Landing;

