import { FormEvent, useRef, useState } from "react";
import { useChangePassMutation } from "../../redux";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../redux/userSlicer";

import { GreenButton } from "../../shared/UI/CustomButtons";
import CustomInput from "../../shared/UI/CustomInput";
import FlickitySlider from "../../shared/Flickity/FlikcitySlider";

import { IoEyeOff } from "react-icons/io5";
import { IoEye } from "react-icons/io5";

import air from '../Authorization/air.png'
import hotel from '../Authorization/hotel.png'
import { Link } from "react-router-dom";



function ChangePass() {

   const authUser = useSelector((state) => state.user.authUser)
   const dispatch = useDispatch()


   const inputRef = useRef<string>('password')
   const [inputType, setInputType] = useState('password')
   const [changePass] = useChangePassMutation()


   const ChangeInputType =(inputRef: React.RefObject<HTMLInputElement>) =>{
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

      const old_password = e.target.old_password.value
      const password_1 = e.target.password_1.value
      const password_2 = e.target.password_2.value

      const changePassData = {
         old_password: old_password,
         password_1: password_1,
         password_2: password_2
      }
    
      console.log(authUser)
      try {
         await changePass({ changePassData, authUser }).unwrap()
         dispatch(addUser({ ...authUser, password: changePassData.password_2 }))
         console.log('ok')
      } catch (error) {
         console.log(error)
         if (error.data && error.data.detail) {
            console.log(error.data.detail)
         }
      }
   }



   return (
      <div className="container pt-[240px] flex justify-between ">
         <div className="max-w-[512px] flex flex-col gap-[24px]">
            <Link to={'/'}>Back to login</Link>
            <h2 className="title">Set a password</h2>
            <p>Your previous password has been reseted. Please set a new password for your account.</p>

            <form onSubmit={handleChangePass}>
               <CustomInput
                  onClick={ChangeInputType}
                  icon={inputType == 'password' ? <IoEyeOff /> : <IoEye />}
                  width={512}
                  type={inputType}
                  label={'Old Password'}
                  ref={inputRef}
                  autofocus
                  name="old_password"
               />
               <CustomInput
                  onClick={ChangeInputType}
                  icon={inputType == 'password' ? <IoEyeOff /> : <IoEye />}
                  width={512}
                  type={inputType}
                  label={'Create New Password'}
                  ref={inputRef}
                  name="password_1"
               />
               <CustomInput
                  onClick={ChangeInputType}
                  icon={inputType == 'password' ? <IoEyeOff /> : <IoEye />}
                  width={512}
                  type={inputType}
                  label={'Re-enter New Password'}
                  ref={inputRef}
                  name="password_2"
               />
               <div className="flex flex-col gap-[40px] pt-4">
                  <GreenButton
                     width={512}>
                     <p>Set password</p>
                  </GreenButton>
               </div>
            </form>


         </div>

         <FlickitySlider images={imageForSlider} options={flickityOptions}></FlickitySlider>


      </div>
   );
}

export default ChangePass;