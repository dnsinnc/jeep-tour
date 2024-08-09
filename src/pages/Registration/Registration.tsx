import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterUserMutation } from '../../redux'
import { IRegister } from "../../types/userTypes";


import { FaFacebook, FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import { GreenButton } from "../../shared/UI/CustomButtons";
import { MCustomInput } from "../../shared/UI/CustomInput";
import FlickitySlider from "../../shared/Flickity/FlikcitySlider";

import { IoEyeOff } from "react-icons/io5";
import { IoEye } from "react-icons/io5";

import air from '../Authorization/air.png'
import hotel from '../Authorization/hotel.png'
import CustomToast, { ToastVariant } from "../../shared/UI/CustomToast";
import { animText, upAnimText } from "../../app/MAnimations/animations";
import { motion } from "framer-motion";


function Registration() {

   const inputRef = useRef<HTMLElement>(null)
   const [inputType, setInputType] = useState('password')
   const [errorMess, setErrorMess] = useState('')

   const [regUser, { isSuccess, isError }] = useRegisterUserMutation()
   const nav = useNavigate()

   const ChangeInputType = (inputRef: React.RefObject<HTMLInputElement>) => {
      if (inputRef.current) {
         if (inputRef.current.type === 'password') {
            setInputType('text');
         } else {
            setInputType('password');
         }
      }
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

   const userReg = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const username = (e.target as HTMLFormElement).username.value
      const phone = (e.target as HTMLFormElement).phone.value
      const password_1 = (e.target as HTMLFormElement).password_1.value
      const password_2 = (e.target as HTMLFormElement).password_2.value

      const newUser: IRegister = {
         username: username.toLowerCase(),
         phone: phone,
         password_1: password_1,
         password_2: password_2
      };

      try {
         await regUser(newUser).unwrap();
         setTimeout(() => {
            nav('/login')
         }, 1000);
         // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
         if (error.data.detail) {
            setErrorMess(error.data.detail);
         }
      }
   }

   return (
      <motion.div
         initial="hidden"
         animate="visible"
         className="container pt-[240px] flex justify-between ">

         <FlickitySlider images={imageForSlider} options={flickityOptions}></FlickitySlider>

         <div className="max-w-[512px] flex flex-col gap-[24px]">
            <motion.h2 variants={upAnimText} className="text-[40px] font-montserrat-600" >Sign Up</motion.h2>
            <motion.p variants={upAnimText}>Sign Up to access your Jeep Tour account</motion.p>

            <motion.form onSubmit={userReg}>
               <MCustomInput
                  variants={animText}
                  type={'text'}
                  label={'Username'}
                  autofocus
                  name={"username"} />
               <MCustomInput
                  custom={1}
                  variants={animText}
                  type={'tel'}
                  label={'Phone Number'}
                  placeholder='00 000 000 000'
                  name={"phone"}
               />
               <MCustomInput
                  custom={2}
                  variants={animText}
                  onClick={ChangeInputType}
                  icon={inputType == 'password' ? <IoEyeOff /> : <IoEye />}
                  type={inputType}
                  label={'Password'}
                  ref={inputRef}
                  name={"password_1"} />

               <MCustomInput
                  custom={3}
                  variants={animText}
                  onClick={ChangeInputType}
                  icon={inputType == 'password' ? <IoEyeOff /> : <IoEye />}
                  type={inputType}
                  label={'Password'}
                  ref={inputRef}
                  name={"password_2"}
               />
               <motion.div
                  variants={upAnimText}
                  className="flex flex-col gap-[40px] pt-6">
                  <div className="flex gap-[5px]">
                     <input required className="checkbox" type="checkbox" name="checkbox" />
                     <p>I agree to all the <span className="red-text">Terms</span> and <span className="red-text">Privacy Policies</span></p>
                  </div>
                  {isError && <CustomToast variant={ToastVariant.error}>{errorMess}</CustomToast>}
                  {isSuccess && <CustomToast variant={ToastVariant.success}>You have successfully registered</CustomToast>}

                  <GreenButton
                     width={'100%'}>
                     <p>
                        Create account
                     </p>
                  </GreenButton>
               </motion.div>
            </motion.form>

            <div>
               <p className="text-center">Already have an account? <Link to={"/login"}><span className="red-text">Login</span></Link></p>
               <div className="flex items-center justify-between pt-[16px]">
                  <hr className="bg-[#dadada]  h-[0.5px] max-w-[154px]" />
                  <p className="text-[#949494] font-montserrat-reg">Or Sign up with</p>
                  <hr className="bg-[#dadada] h-[0.5px] max-w-[154px]" />
               </div>
            </div>

            <div className="flex justify-between pt-[16px]">
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



      </motion.div>
   );
}

export default Registration;


