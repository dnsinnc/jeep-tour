import { useRef, useState } from "react";


import { GreenButton } from "../../shared/UI/CustomButtons";
import CustomInput from "../../shared/UI/CustomInput";
import FlickitySlider from "../../shared/Flickity/FlikcitySlider";

import { IoEyeOff } from "react-icons/io5";
import { IoEye } from "react-icons/io5";


import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa6";



import air from './air.png'
import hotel from './hotel.png'
import { Link } from "react-router-dom";
import axios from "axios";

function Authorization() {

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
   }


   const flickityOptions = {
      initialIndex: 1,
      autoPlay: true
   }

   const imageForSlider = {
      id: [1, 2, 3],
      images: [air, hotel, air]
   }

   const [user, setUser] = useState()



   function onAuth(e) {
      e.preventDefault();

      const username = e.target.username.value
      const password = e.target.password.value
  
      const authUser = {
         username: username,
         password: password
      }
     

      axios.post('http://localhost:8000/user/auth', authUser, {
         headers: {
            "Content-Type": "application/json",
            'Authorization': 'Basic ' + btoa(`${username}:${password}`),
         }
      }).then(response => {
         console.log('Response data:', response.data);
      }).catch(error => {
         if (error.response) {
            console.error('Response data:', error.response.data);
            console.error('Response status:', error.response.status);
            console.error('Response headers:', error.response.headers);
         } else if (error.request) {
            console.error('Request data:', error.request);
         } else {
            console.error('Error message:', error.message);
         }
         console.error('Config:', error.config);
      });

      axios.get('http://localhost:8000/user/me/profile/', {
         headers: {
            "Content-Type": "application/json",
            'accept': 'application/json',
            'Authorization': 'Basic ' + btoa(`${username}:${password}`),
         }
      }).then(response => {
         setUser(response.data)
      })
         .catch(error => {
            if (error.response) {
               console.error('Response data:', error.response.data);
               console.error('Response status:', error.response.status);
               console.error('Response headers:', error.response.headers);
            } else if (error.request) {
               console.error('Request data:', error.request);
            } else {

               console.error('Error message:', error.message);
            }
            console.error('Config:', error.config);
         });
   }


   return (
      <div className="container pt-[240px] flex justify-between ">
         <div className="max-w-[512px] flex flex-col gap-[24px]">
            
            <h2 className="title" >Login</h2>
            <h2 className="title" ><Link to={'/changepass'}> changePass</Link></h2>
            <p>Login to access your Jeep Tour account</p>
            <form onSubmit={onAuth}>
               <CustomInput
                  width={512}
                  placeholder={''}
                  type={'text'}
                  label={'Username'}
                  autofocus
                  name="username"
               />
               <CustomInput
                  onClick={ChangeInputType}
                  icon={inputType == 'password' ? <IoEyeOff /> : <IoEye />}
                  width={512}
                  placeholder={''}
                  type={inputType}
                  label={'Password'}
                  ref={inputRef}
                  name="password"
               />

               {user ? <h2 className="title" > Hi! {user.username}</h2> : ''}


               <div className="pt-[20px]">
                  <GreenButton
                     width={512}>
                     <p>Login</p>
                  </GreenButton>
               </div>
            </form>

            <div className="flex justify-between">
               <div className="flex items-center gap-[5px]">
                  <input className="checkbox" type="checkbox" name="" id="" />
                  <p>Remember me</p>
               </div>
               <Link to={"/forgotpass"}><p  ><span className="red-text">Forgot password</span></p> </Link>

            </div>

            <div>
               <p className="text-center">Don’t have an account? <Link to={"/registration"}><span className="red-text">Sign up</span></Link></p>
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

export default Authorization;