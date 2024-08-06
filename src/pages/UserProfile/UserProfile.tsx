
import { useGetUserQuery } from "../../redux";
import { useDeleteUserMutation } from "../../redux";
import { motion } from "framer-motion"

import { ChangeButton } from "../../shared/UI/CustomButtons";
import Header from "../../widgets/Header";
import { MdDeleteForever } from "react-icons/md";
import { ImCross } from "react-icons/im";
import { MdEditSquare } from "react-icons/md";


import CustomInput from "../../shared/UI/CustomInput";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaPen } from "react-icons/fa";
import Footer from "../../widgets/Footer";

import { useAddProfileAvatarMutation } from "../../redux";
import { useAppSelector } from "../../hooks/redux";
import Spinner from "../../shared/Loader/Spinner";
import { animText } from "../../app/MotionAnimations/animations";
import Modal from "../../shared/UI/Modal";
import ProfileSkelet from '../../shared/Loader/ProfileSkelet'



function UserProfile() {

   const [modal, setModal] = useState(false)



   const authUser = useAppSelector((state) => state.user.authUser)
   const { data: user, refetch } = useGetUserQuery(authUser, {
      refetchOnMountOrArgChange: true,
   })
   const [addAvatar, { isLoading, isError }] = useAddProfileAvatarMutation()
   const [deleteAccount] = useDeleteUserMutation()
   const ref = useRef<HTMLDivElement>(null)

   const openModal = () => {
      setModal(!modal)
      ref.current?.scrollIntoView({ behavior: 'smooth' })
      if (!modal) {
         document.body.style.cssText = `overflow: hidden`;
      } else {
         document.body.style.cssText = `overflow: visible`;
      }

   }

   const changeAvatar = async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0]
      const avatar = new FormData()

      if (file) {
         avatar.append('photo', file);
         try {
            await addAvatar({ avatar, authUser }).unwrap();
            await refetch();
            window.location.reload();
         } catch (error) {
            console.error('Error updating avatar:', error);
         }
      }
   }

   const onDeleteAccount = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const password = JSON.stringify((e.target as HTMLFormElement).password.value)
      user
      const pass = {
         "password": password
      }
      console.log(pass)

      try {
         await deleteAccount({ password, authUser }).unwrap()
      } catch (error) {
         console.log(error)
      }
   }

   return (
      <motion.div
         initial="hidden"
         animate="visible"
         onClick={openModal}
         className={modal ? 'back' : ''}>
         <div
            className="bg-[#FAFBFC] font-montserrat-600 "
            onClick={e => e.stopPropagation()}>
            <div>
               <div className="relative z-10">
                  <Header />
               </div>

               {user ?
                  (<div className="container pt-[48px]">

                     <motion.div custom={1} variants={animText} className="bg-profile-banner flex justify-center rounded-[12px] bg-cover bg-center w-full h-[350px] relative z-0">
                        <div className="absolute -bottom-[140px] flex flex-col items-center gap-5">
                           {isLoading ? <Spinner /> :
                              <>
                                 <img className='w-[160px] relative h-[160px] object-cover rounded-full border-4 border-[#FF8682] border-solid '
                                    src={user.url} alt="avatar" />
                                 <div className="absolute w-[45px] scale-2 bottom-[55px] right-0 h-[45px] flex justify-center items-center ">
                                    <label className="input-file">
                                       <input id='files' onChange={changeAvatar} accept="image/png, image/jpeg" type="file" name="file" />
                                       <span><FaPen /></span>
                                    </label>
                                 </div>
                              </>}
                           <p className="text-[24px] " >{user.username}</p>
                           {isError ? <div className="absolute bottom-[26px] text-[red] text-[20px]">Oops, try again</div> : ''}
                        </div>
                     </motion.div>
                     <motion.div
                        initial="hidden"
                        animate="visible"
                        ref={ref}
                        className="pt-[170px]">
                        <motion.div custom={2} variants={animText} className="text-xl drop-shadow-md h-[80px] bg-[#FFFFFF] rounded-[12px] flex justify-center items-center">
                           Account
                        </motion.div>
                        <div className="pt-[96px] relative">

                           <p className="text-[32px]">Account</p>
                           <div
                              className="text-xl drop-shadow-md rounded-[12px] px-[24px] py-[32px] bg-[#FFFFFF] flex flex-col gap-8">
                              <motion.div custom={2} variants={animText} className="flex justify-between">
                                 <div>
                                    <p className="font-montserrat-reg text-[16px]">Name</p>
                                    <p>{user.username}</p>
                                 </div>
                                 <ChangeButton><MdEditSquare />Change</ChangeButton>
                              </motion.div>
                              <motion.div custom={3} variants={animText} className="flex justify-between">
                                 <div>
                                    <p className="font-montserrat-reg text-[16px]">Email</p>
                                    <p>{user.email ? user.email : <span className="text-stone-400">Email not specified</span>}</p>
                                 </div>
                                 <ChangeButton><MdEditSquare />Change</ChangeButton>

                              </motion.div>
                              <motion.div custom={4} variants={animText} className="flex justify-between">
                                 <div>
                                    <p className="font-montserrat-reg text-[16px]">Password</p>
                                    <p>*************</p>
                                 </div>
                                 <Link to={"/change-password"}><ChangeButton><MdEditSquare />Change</ChangeButton></Link>
                              </motion.div>
                              <motion.div custom={5} variants={animText} className="flex justify-between">
                                 <div>
                                    <p className="font-montserrat-reg text-[16px]">Phone number</p>
                                    <p>{user.phone}</p>
                                 </div>
                                 <ChangeButton><MdEditSquare /> Change</ChangeButton>

                              </motion.div>
                              <motion.div custom={6} variants={animText} className="flex justify-between">
                                 <div>
                                    <p className="font-montserrat-reg text-[16px]">Address</p>
                                    <p>{user.addres ? user.addres : <span className="text-stone-400">Address not specified</span>}</p>
                                 </div>
                                 <ChangeButton><MdEditSquare /> Change</ChangeButton>

                              </motion.div>

                              <motion.div custom={7} variants={animText} className="flex justify-between">
                                 <div>
                                    <p className="font-montserrat-reg text-[16px]">Date of registration</p>
                                    <p>{user.register_data.slice(0, 10)}</p>
                                 </div>
                                 <ChangeButton><MdEditSquare /> Change</ChangeButton>

                              </motion.div>
                              <div className="flex justify-end">
                                 <button
                                    onClick={openModal}
                                    className="h-[50px] px-[10px] bg-[red] text-[white]  text-[16px] flex items-center rounded-[4px] font-montserrat-500 animated-button">
                                    <MdDeleteForever size={'28px'} /
                                    >Delete Account
                                 </button>
                              </div>
                           </div>
                           <Modal
                              state={modal}>
                           <form
                              onSubmit={onDeleteAccount}
                              className="text-center h-[280px] max-w-[600px] gap-4 items-center flex m-auto flex-col absolute z-20 top-[0] left-[0] right-[0] bottom-[50%] text-xl  bg-[#FAFBFC] p-[40px] rounded-lg">
                              <span
                                 onClick={openModal}
                                 className="absolute right-3 top-3">
                                 <ImCross />
                              </span>

                                 Are you sure you want to delete your account?
                                 <CustomInput width={'100%'} label={"Password"} type={"password"} name={"password"} />
                                 <button className="h-[50px] w-[100px] justify-center px-[10px] bg-[red]  text-[white]  text-xl flex items-center rounded-[4px]  animated-button">Yes</button>
                              </form>
                           </Modal>
                        </div>
                     </motion.div>
                  </div>)
                  : <div className="flex justify-center">
                     <ProfileSkelet/>
                  </div>}
               
               
               < Footer />

            </div>
         </div>

      </motion.div>

   )
}

export default UserProfile;
