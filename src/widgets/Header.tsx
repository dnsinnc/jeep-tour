import { useGetUserQuery } from "../redux";
import { deleteUser } from "../redux/userSlicer";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { TbMinusVertical } from "react-icons/tb";
import { FaHeart } from "react-icons/fa";
import { FaPersonHiking, FaUser } from "react-icons/fa6";
import { IoLogOut } from "react-icons/io5";
import { HiSupport } from "react-icons/hi";

import { IoSettings } from "react-icons/io5";
import { useState } from "react";
import { GoChevronRight } from "react-icons/go";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { downAnimText } from "../app/MAnimations/animations";
import { RiSearch2Fill } from "react-icons/ri";
import Logo from "../shared/LOGO";

interface HeaderProps {
   transparent?: boolean
}

const Header = ({ transparent }: HeaderProps) => {
   const authUser = useAppSelector((state) => state.user.authUser)
   const dispatch = useAppDispatch()
   const nav = useNavigate()

   const { data: user } = useGetUserQuery(authUser)
   const [profileMenu, setProfileMenu] = useState(false)


   const logout = () => {
      nav('/login')
      dispatch(deleteUser())
   }


   return (

      <motion.header
         initial="hidden"
         animate="visible"
         variants={downAnimText}
         custom={2}
         className={`drop-shadow-3xl ${transparent ? '' : 'bg-[white]'} h-[87px] font-montserrat-600`}>

         <div className="max-w-[1380px] m-auto px-[30px] flex justify-between relative items-center h-[100%]">
            <div className="flex gap-10">
               <Link to={''} className="flex items-center gap-3"><RiSearch2Fill size={'24px'} />Find a Tour</Link>
               <Link to={''} className="flex items-center gap-3"><FaPersonHiking size={'24px'} />Become a Tour Guide</Link>
            </div>
            <div className=' z-0 right-[50%] w-[200px] translate-x-[120px] absolute'><Logo/>
            </div>
            {user ? (
               <div className="flex items-center gap-2">
                  <Link className="flex gap-2" to={''}> <FaHeart size={'20px'} />
                     <p>Favorite</p></Link>
                  <TbMinusVertical size={'24px'} />
                  <div
                     onClick={() => setProfileMenu(!profileMenu)}
                     className="flex items-center gap-2 cursor-pointer">
                     <img className="object-cover w-[45px] h-[45px] rounded-full" src={user.url} alt="" />
                     <p className="hover:text-[#FF8682] transition-all duration-300">{user.username}</p>
                  </div>
                  {profileMenu &&
                     <div className='w-[320px] show-menu top-[80px] rounded-[12px] right-[100px] text-[black] z-20 bg-[white] absolute p-8 '>
                        <div className="flex items-center gap-4 cursor-pointer">
                           <img className="w-[64px] h-[64px] rounded-full object-cover" src={user.url} alt="" />
                           <div>
                              <p className='text-[20px]'>{user.username}</p>
                              <p className="font-montserrat-reg">Online</p>
                           </div>
                        </div>
                        <div className=" mt-[10px] mb-[5px] flex flex-col gap-[15px]">
                           <hr className="my-[10px] w-full h-[0.5px] opacity-[25%] bg-[#112211]" />
                           <Link to={'/jeep-tour/my-profile'} className="flex gap-2 font-montserrat-500 items-center"><FaUser size={'22px'} />My account <GoChevronRight />
                           </Link>
                           <Link to={''} className="flex gap-2 font-montserrat-500 items-center"><IoSettings size={'22px'} />Settings <GoChevronRight />
                           </Link>
                           <hr className="my-[10px] w-full h-[0.5px] opacity-[25%] bg-[#112211]" />
                           <Link to={''} className="flex gap-2 font-montserrat-500 items-center"><HiSupport size={'22px'} />Support <GoChevronRight />
                           </Link>
                           <Link to={'/jeep-tour/login'}
                              onClick={logout}
                              className="flex gap-2 font-montserrat-500 items-center"><IoLogOut size={'22px'} />Logout
                           </Link>
                        </div>
                     </div>
                  }
               </div>
            )
               : <div className="flex items-center gap-9">
                  <Link to={'/jeep-tour/login'}>Login</Link>
                  <Link className="bg-[white] text-[black] px-[20px] py-[12px] rounded-[8px] duration-500 transition-all hover:bg-slate-200" to={'/jeep-tour/registration'}>Sign Up</Link>
               </div>}
         </div>

      </motion.header >
   );
}


export default Header;
