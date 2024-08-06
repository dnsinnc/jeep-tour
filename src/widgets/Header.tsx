import { useGetUserQuery } from "../redux";
import { deleteUser } from "../redux/userSlicer";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { IoIosBed } from "react-icons/io";
import { IoAirplane } from "react-icons/io5";
import { TbMinusVertical } from "react-icons/tb";
import { FaHeart } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { IoLogOut } from "react-icons/io5";
import { HiSupport } from "react-icons/hi";

import { IoSettings } from "react-icons/io5";
import { useState } from "react";
import { GoChevronRight } from "react-icons/go";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { animText } from "../app/MotionAnimations/animations";


const Header = () => {
   const authUser = useAppSelector((state) => state.user.authUser)
   const dispatch = useAppDispatch()
   const nav = useNavigate()

   const { data: user } = useGetUserQuery(authUser)
   const [profileMenu, setProfileMenu] = useState(false)


   const logout = () => {
      nav('/')
      dispatch(deleteUser())
   }


      return (

         <motion.header
            initial="hidden"
            animate="visible"
            variants={animText}
            custon={3}
            className="drop-shadow-md bg-[white] h-[87px]  font-montserrat-600">

            <div className="container flex justify-between relative items-center h-[100%]">
               <div className="flex gap-10">
                  <p className="flex items-center gap-1"><IoAirplane size={'24px'} /> Find Flight</p>
                  <p className="flex items-center gap-1"><IoIosBed size={'24px'} /> Find Stays</p>
               </div>
               <div
                  className="text-2xl">LOGO</div>
               <div className="flex items-center gap-2">
                  <FaHeart size={'20px'} />
                  Favourites
                  <TbMinusVertical size={'24px'} />

                  {user ? (
                     <div className="">
                        <div
                           onClick={() => setProfileMenu(!profileMenu)}
                           className="flex items-center gap-2 cursor-pointer">
                           <img className="object-cover w-[45px] h-[45px] rounded-full" src={user.url} alt="" />
                           <p>{user.username}</p>
                        </div>

                        {profileMenu &&
                           <div className='w-[320px] show-menu z-10 top-[80px] rounded-[12px] right-[100px] bg-[white] absolute p-8 '>
                              <div className="flex items-center gap-4 cursor-pointer">
                                 <img className="w-[64px] h-[64px] rounded-full object-cover" src={user.url} alt="" />
                                 <div>
                                    <p className='text-[20px]'>{user.username}</p>
                                    <p className="font-montserrat-reg">Online</p>
                                 </div>
                              </div>
                              <div className=" mt-[10px] mb-[5px] flex flex-col gap-[15px]">
                                 <hr className="my-[10px] w-full h-[0.5px] opacity-[25%] bg-[#112211]" />
                                 <p className="flex gap-2 font-montserrat-500 items-center"><FaUser size={'22px'} />My account <GoChevronRight />
                                 </p>
                                 <p className="flex gap-2 font-montserrat-500 items-center"><IoSettings size={'22px'} />Settings <GoChevronRight />
                                 </p>
                                 <hr className="my-[10px] w-full h-[0.5px] opacity-[25%] bg-[#112211]" />
                                 <p className="flex gap-2 font-montserrat-500 items-center"><HiSupport size={'22px'} />Support <GoChevronRight />
                                 </p>
                                 <p
                                    onClick={logout}
                                    className="flex gap-2 font-montserrat-500 items-center"><IoLogOut size={'22px'} />Logout
                                 </p>
                              </div>
                           </div>
                        }
                     </div>
                  )
                     : <div>
                        <p>User</p>
                     </div>}

               </div>

            </div>
         </motion.header>
      );
   }


export default Header;
