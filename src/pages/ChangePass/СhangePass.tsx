import { FormEvent, useRef, useState } from "react";
import { useChangePassMutation } from "../../redux";
import { addUser, deleteUser } from "../../redux/userSlicer";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";

import { GreenButton } from "../../shared/UI/CustomButtons";
import  { MCustomInput } from "../../shared/UI/CustomInput";
import FlickitySlider from "../../shared/Flickity/FlikcitySlider";

import { IoEyeOff } from "react-icons/io5";
import { IoEye } from "react-icons/io5";

import air from '../Authorization/air.png'
import hotel from '../Authorization/hotel.png'
import CustomToast, { ToastVariant } from "../../shared/UI/CustomToast";
import { animText, upAnimText } from "../../app/MotionAnimations/animations";
import { motion } from "framer-motion";

function ChangePass() {

   const authUser = useAppSelector((state) => state.user.authUser)
   const dispatch = useAppDispatch()


   const inputRef = useRef<HTMLElement>(null)
   const [inputType, setInputType] = useState('password')
   const [errorMess, setErrorMess] = useState('')
   const [changePass,{isSuccess}] = useChangePassMutation()


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

   const handleChangePass = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!(e.target instanceof HTMLElement)) return
      const old_password = (e.target as HTMLFormElement).old_password.value
      const password_1 = (e.target as HTMLFormElement).password_1.value
      const password_2 = (e.target as HTMLFormElement).password_2.value


      const changePassData = {
         old_password: old_password,
         password_1: password_1,
         password_2: password_2
      }



      try {
         await changePass({ changePassData, authUser }).unwrap()
         setTimeout(() => {
            dispatch(addUser({ ...authUser, password: changePassData.password_2 }))
            dispatch(deleteUser())
         }, 3000)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
         if (error.data.detail) {
            setErrorMess(error.data.detail)
         }
      }
   }



   return (
      <motion.div
         initial="hidden"
         animate="visible"
         className="container pt-[240px] flex justify-between ">
         <div className="max-w-[512px] flex flex-col gap-[24px]">
            <p onClick={() => dispatch(deleteUser())}>Back to login</p>
            <motion.h2  variants={upAnimText} className="title">Set a password</motion.h2>
            <motion.p variants={upAnimText} >Your previous password has been reseted. Please set a new password for your account.</motion.p>

            <motion.form onSubmit={handleChangePass}>
               <MCustomInput
                  variants={animText}
                  onClick={ChangeInputType}
                  icon={inputType == 'password' ? <IoEyeOff /> : <IoEye />}
                  width={'100%'}
                  type={inputType}
                  label={'Old Password'}
                  ref={inputRef}
                  autofocus
                  name="old_password"
               />
               <MCustomInput
                  custom={1}
                  variants={animText}
                  onClick={ChangeInputType}
                  icon={inputType == 'password' ? <IoEyeOff /> : <IoEye />}
                  width={'100%'}
                  type={inputType}
                  label={'Create New Password'}
                  ref={inputRef}
                  name="password_1"
               />
               <MCustomInput
                  custom={2}
                  variants={animText}
                  onClick={ChangeInputType}
                  icon={inputType == 'password' ? <IoEyeOff /> : <IoEye />}
                  width={'100%'}
                  type={inputType}
                  label={'Re-enter New Password'}
                  
                  ref={inputRef}
                  name="password_2"
               />
               {errorMess && <CustomToast variant={ToastVariant.error}>{errorMess}</CustomToast>}
               {isSuccess && <CustomToast variant={ToastVariant.success}>You have successfully changed your password</CustomToast>}

               <motion.div
                  custom={2}
                  variants={upAnimText}
                  className="flex flex-col gap-[40px] pt-4">
                  <GreenButton
                     width={'100%'}>
                     <p>Set password</p>
                  </GreenButton>
               </motion.div>
            </motion.form>

         </div>
         <FlickitySlider images={imageForSlider} options={flickityOptions}></FlickitySlider>

      </motion.div>
   );
}

export default ChangePass;