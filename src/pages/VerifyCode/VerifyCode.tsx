import { useRef, useState } from "react";

import { GreenButton } from "../../shared/UI/CustomButtons";
import CustomInput from "../../shared/UI/CustomInput";
import FlickitySlider from "../../shared/Flickity/FlikcitySlider";


import { IoEyeOff } from "react-icons/io5";
import { IoEye } from "react-icons/io5";

import air from '../Authorization/air.png'
import hotel from '../Authorization/hotel.png'
import { Link } from "react-router-dom";

function VerifyCode() {
   const inputRef = useRef<string>('password')

   const [inputType, setInputType] = useState('password')

   function ChangeInputType(inputRef: React.RefObject<HTMLInputElement>) {
      if (inputRef.current) {
         if (inputRef.current.type === 'password') {
            setInputType('text');
         } else {
            setInputType('password');
         }
      }
      console.log(inputType)
   }

   const flickityOptions = {
      initialIndex: 1,
      autoPlay: true
   }
   const imageForSlider = {
      id: [1, 2, 3],
      title: ["first", "second", "three"],
      images: [air, hotel, air]
   }

   return (
      <div className="container pt-[240px] flex justify-between ">


         <div className="max-w-[512px] flex flex-col gap-[24px]">
            <Link to={'/jeep-tour/login'}>Back to login</Link>
            <h2 className="title" >Verify code</h2>
            <p>An authentication code has been sent to your email.</p>

            <form>

               <CustomInput
                  onClick={ChangeInputType}
                  icon={inputType == 'password' ? <IoEyeOff /> : <IoEye />}
                  type={inputType}
                  label={'Enter Code'}
                  ref={inputRef}
                  autofocus name={"verify"}               />
               <div className="flex flex-col gap-[40px] pt-4">
                  <div className="flex gap-[5px]">
                     <p>Didn’t receive a code? <span className="red-text">Resend</span></p>
                  </div>

                  <GreenButton
                     width={'100%'}>
                     <p >Verify</p>
                  </GreenButton>
               </div>
            </form>

 
         </div>

         <FlickitySlider images={imageForSlider} options={flickityOptions}></FlickitySlider>


      </div>
   );
}

export default VerifyCode;