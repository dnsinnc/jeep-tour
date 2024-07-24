
import { GreenButton } from "../../shared/UI/CustomButtons";
import CustomInput from "../../shared/UI/CustomInput";
import FlickitySlider from "../../shared/Flickity/FlikcitySlider";

import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa6";
import { GoChevronLeft } from "react-icons/go";

import air from '../Authorization/air.png'
import hotel from '../Authorization/hotel.png'
import { Link } from "react-router-dom";

function RecoveryPass() {


   const flickityOptions = {
      initialIndex: 1,
      autoPlay: true
   }

   const imageForSlider = {
      id: [1, 2, 3],
      images: [air, hotel, air]
   }

   return (
      <div className="container pt-[240px] flex justify-around ">
         <div className="max-w-[512px] flex flex-col gap-[24px]">
            <Link to={"/"}><p className="flex items-center"><GoChevronLeft size={'30px'}/> Back to login</p></Link>
            <h2 className="title">Forgot your password?</h2>
            <p>Don’t worry, happens to all of us. Enter your email below to recover your password</p>
            <form>
              
               <CustomInput
                  width={512}
                  label={"Email"}
                  type={"email"}
                  autofocus name={"verify"}
               />
               
               <div className="pt-[34px]">
                  <GreenButton
                     width={512}>
                     <p>Submit</p>
                  </GreenButton>
               </div>
            </form>

            <div>
               <div className="flex items-center justify-between pt-[40px]">
                  <hr className="bg-[#dadada]  h-[0.5px] w-[194px]" />
                  <p className="text-[#949494] font-montserrat-reg">Or login with</p>
                  <hr className="bg-[#dadada] h-[0.5px] w-[194px]" />
               </div>
            </div>

            <div className="flex justify-between pt-[40px]">
               <div className="px-[68px] py-[16px] border-solid border border-[#8DD3BB]">
                  <FaFacebook size={'24px'} />
               </div>
               <div className="px-[68px] py-[16px] border-solid border border-[#8DD3BB]">
                  <FcGoogle size={'24px'} />
               </div>
               <div className="px-[68px] py-[16px] border-solid border border-[#8DD3BB]">
                  <FaApple size={'24px'} />
               </div>
            </div>
         </div>

         <FlickitySlider images={imageForSlider} options={flickityOptions}></FlickitySlider>

      </div>
   );
}

export default RecoveryPass;