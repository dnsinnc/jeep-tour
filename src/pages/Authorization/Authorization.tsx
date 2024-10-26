import { useRef, useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { useUserAuthMutation } from "../../redux";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/userSlicer";

import { GreenButton } from "../../shared/UI/CustomButtons";
import { MCustomInput } from "../../shared/UI/CustomInput";
import FlickitySlider from "../../shared/Flickity/FlikcitySlider";


import { IoEyeOff } from "react-icons/io5";
import { IoEye } from "react-icons/io5";


import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa6";

import air from './air.png'
import hotel from './hotel.png'
import CustomToast, { ToastVariant } from "../../shared/UI/CustomToast";
import { animText, upAnimText } from "../../app/MAnimations/animations";
import { motion } from "framer-motion";


function Authorization() {

   const dispatch = useDispatch()
   const nav = useNavigate()

   const inputRef = useRef<HTMLElement>(null)
   const [inputType, setInputType] = useState('password')
   const [authError, setAuthError] = useState('')

   const [userAuth, { isError, isSuccess }] = useUserAuthMutation()

   const flickityOptions = {
      initialIndex: 1,
      autoPlay: true
   }

   const imageForSlider = {
      id: [1, 2, 3],
      images: [air, hotel, air]
   }

   const ChangeInputType = (inputRef: React.RefObject<HTMLInputElement>) => {
      if (inputRef.current) {
         if (inputRef.current.type === 'password') {
            setInputType('text');
         } else {
            setInputType('password');
         }
      }
   }

   const onAuth = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const username = (e.target as HTMLFormElement).username.value
      const password = (e.target as HTMLFormElement).password.value

      const authUserData = {
         username: username.toLowerCase(),
         password: password
      }

      try {
         await userAuth(authUserData).unwrap();
         setTimeout(() => {
            nav('/')
            dispatch(addUser(authUserData))

         }, 1000)
         // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
         setAuthError(error.data.detail);
      }
   }

   return (
      <motion.div
         initial="hidden"
         animate="visible"
         className="container pt-[240px] flex justify-between ">
         <div className="max-w-[512px] flex flex-col gap-[24px]">
            <motion.h2 variants={upAnimText} className="text-[40px] font-montserrat-600" >Login</motion.h2>
            <motion.p variants={upAnimText} >Login to access your Jeep Tour account</motion.p>
            <motion.form onSubmit={onAuth}>
               <MCustomInput
                  placeholder={''}
                  type={'text'}
                  label={'Username'}
                  autofocus
                  name="username"
                  variants={animText}
               />
               <MCustomInput
                  onClick={ChangeInputType}
                  icon={inputType == 'password' ? <IoEyeOff /> : <IoEye />}
                  placeholder={''}
                  type={inputType}
                  label={'Password'}
                  ref={inputRef}
                  name="password"
                  variants={animText}
                  custom={1}

               />

               <div className="mt-2">
                  {isError && <CustomToast variant={ToastVariant.error}>
                     {authError}
                  </CustomToast>}
               </div>
               {isSuccess && <CustomToast variant={ToastVariant.success}>
                  You are successfully logged in
               </CustomToast>}

               <motion.div variants={upAnimText} className="pt-[20px]">
                  <GreenButton
                     width={'100%'}>
                     <p>Login</p>
                  </GreenButton>
               </motion.div>
            </motion.form>

            <div className="flex justify-between">
               <div className="flex items-center gap-[5px]">
                  <input className="checkbox" type="checkbox" name="" id="" />
                  <p>Remember me</p>
               </div>
               <Link to={""}><p className="red-text">Forgot password</p> </Link>

            </div>

            <div>
               <p className="text-center">Don’t have an account?
                  <Link to={"/jeep-tour/registration"}><span className="red-text"> Sign up</span></Link></p>
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

      </motion.div>
   );
}

export default Authorization;