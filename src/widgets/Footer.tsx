import { useInView } from "framer-motion";
import CustomInput from "../shared/UI/CustomInput";

import email from './email.png'
import { useRef } from "react";

function Footer() {
   const ref = useRef(null)
   const isInView = useInView(ref)

   return (
      <footer ref={ref} className={`duration-700 transition-all- ${isInView ? '' : 'translate-y-[200px] opacity-0'}`}>
         <div className="container ">
            <div className="relative rounded-[20px] z-10 top-40 bg-[#CDEAE1] px-[24px] flex items-end justify-between max-w-[1320px] ]">
               <div className="pb-[24px] flex flex-col gap-[24px]">
                  <p className="font-trade-gotic text-[44px] max-w-[300px] leading-10">Subscribe Newsletter</p>
                  <div>
                     <p className="font-trade-gotic text-[20px]">The Travel</p>
                     <p className="font-montserrat-reg">Get inspired! Receive travel discounts, tips and behind the scenes stories.</p>
                     <form className="max-w-[470px] h-[64px] flex items-end gap-[16px]">
                        <CustomInput placeholder="Your email address" type={"email"} name={"email"} ></CustomInput>
                        <button className="bg-[#112211] text-[16px] h-[56px] rounded-[4px] text-white px-[16px]">Subscribe</button>
                     </form>
                  </div>
               </div>
               <div>
                  <img src={email} alt="" />
               </div>
            </div>
         </div>
         <div>

         </div>
         <div className="bg-[#8DD3BB] h-[422px] w-[100%]">

         </div>
      </footer>
   );
}

export default Footer;