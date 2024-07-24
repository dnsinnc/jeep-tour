import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterUserMutation } from '../../redux'
import { IRegister } from "../../types/userTypes";


import { FaFacebook, FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import { GreenButton } from "../../shared/UI/CustomButtons";
import CustomInput from "../../shared/UI/CustomInput";
import FlickitySlider from "../../shared/Flickity/FlikcitySlider";

import { IoEyeOff } from "react-icons/io5";
import { IoEye } from "react-icons/io5";

import air from '../Authorization/air.png'
import hotel from '../Authorization/hotel.png'


function Registration() {

   const inputRef = useRef<string>('password')
   const [inputType, setInputType] = useState('password')
   const [registerUser, setRegisterUser] = useState(false)
   const [regError, setRegError] = useState('')

   const [regUser] = useRegisterUserMutation()
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

   const userReg = async (e) => {
      e.preventDefault();

      const username = e.target.username.value
      const phone = e.target.phone.value
      const password_1 = e.target.password_1.value
      const password_2 = e.target.password_2.value

      const newUser: IRegister = {
         username: username,
         phone: phone,
         password_1: password_1,
         password_2: password_2
      };

      try {
         await regUser(newUser).unwrap();
         setRegisterUser(true)
         setTimeout(() => {
            nav('/')
            setRegisterUser(false)
         }, 4000);
         setRegError('');
      } catch (error) {
         if (error.data && error.data.detail) {
            setRegError(error.data.detail);
         }
      }
   }

      return (
         <div className="container pt-[240px] flex justify-between ">

            <FlickitySlider images={imageForSlider} options={flickityOptions}></FlickitySlider>

            <div className=" max-w-[512px] flex flex-col gap-[24px]">
               <h2 className="title" >Sign Up</h2>
               <p>Sign Up to access your Jeep Tour account</p>


               <form onSubmit={userReg}>

                  <CustomInput
                     width={512}
                     type={'text'}
                     label={'Username'}
                     autofocus
                     name={"username"} />
                  <CustomInput
                     width={512}
                     type={'tel'}
                     label={'Phone Number'}
                     placeholder='00 000 000 000'
                     name={"phone"}
                  />
                  <CustomInput
                     onClick={ChangeInputType}
                     icon={inputType == 'password' ? <IoEyeOff /> : <IoEye />}
                     width={512}
                     type={inputType}
                     label={'Password'}
                     ref={inputRef}
                     name={"password_1"} />

                  <CustomInput
                     onClick={ChangeInputType}
                     icon={inputType == 'password' ? <IoEyeOff /> : <IoEye />}
                     width={512}
                     type={inputType}
                     label={'Password'}
                     ref={inputRef}
                     name={"password_2"}
                  />
                  <div className="flex flex-col gap-[40px] pt-6">

                     <div className="flex gap-[5px]">
                        <input required className="checkbox" type="checkbox" name="" id="" />
                        <p>I agree to all the <span className="red-text">Terms</span> and <span className="red-text">Privacy Policies</span></p>
                     </div>
               {regError && <p>{regError}</p>}
                     {registerUser ? <p><div className=''>You have successfully registered</div></p> : ''}

                     <GreenButton
                        width={512}>
                        <p id={'subm'}
                           className="328"
                        >Create account
                        </p>
                     </GreenButton>
                  </div>
               </form>

               <div>
                  <p className="text-center">Already have an account? <Link to={"/"}><span className="red-text">Login</span></Link></p>
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



         </div>
      );
   }

   export default Registration;

