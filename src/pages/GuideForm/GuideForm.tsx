import { motion } from "framer-motion";
import { useAddProfileAvatarMutation, useGetUserQuery } from "../../redux";
import Header from "../../widgets/Header";
import { FaPen, FaPlus } from "react-icons/fa";
import { animText } from "../../app/MAnimations/animations";
import Spinner from "../../shared/Loader/Spinner";
import { useAppSelector } from "../../hooks/redux";
import CustomInput from "../../shared/UI/CustomInput";
import air from './../Authorization/air.png'
import hotel from './../Authorization/hotel.png'
import FlickitySlider from "../../shared/Flickity/FlikcitySlider";
import { RxCross2 } from "react-icons/rx";

function GuideForm() {
   const authUser = useAppSelector((state) => state.user.authUser)
   const [addAvatar, { isLoading, isError }] = useAddProfileAvatarMutation()

   const { data: user, refetch } = useGetUserQuery(authUser, {
      refetchOnMountOrArgChange: true,
   })

   const chooseCountryList = [1, 2]

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


   const flickityOptions = {
      initialIndex: 1,
      autoPlay: true
   }

   const imageForSlider = {
      id: [1, 2, 3],
      images: [air, hotel, air]
   }
   return (
      <>
         <Header />
         <div className="container">
            {user ?
               <motion.section custom={1} variants={animText} className="bg-profile-banner flex justify-center rounded-[12px] bg-cover bg-center w-full h-[350px] relative z-0">
                  <div className="absolute -bottom-[140px] flex flex-col items-center gap-5">
                     {isLoading ? <Spinner /> :
                        <>
                           <img className='w-[160px] relative h-[160px] object-cover rounded-full border-4 border-[#FF8682] border-solid '
                              src={user.url} alt="avatar" />
                           <div className="absolute w-[45px] scale-2 bottom-[55px] right-0 h-[45px] flex justify-center items-center ">
                              <label className="input-file">
                                 <input onChange={changeAvatar} id='files' accept="image/png, image/jpeg" type="file" name="file" />
                                 <span><FaPen /></span>
                              </label>
                           </div>
                        </>}
                     <p className="text-[24px] " >{user.username}</p>
                     {isError ? <div className="absolute bottom-[26px] text-[red] text-[20px]">Oops, try again</div> : ''}
                  </div>
               </motion.section>
               :
               ' '}
            <div className="pt-[200px]">
               <div className="flex gap-4 justify-evenly ">
                  <div className="pt-[0px] flex flex-wrap w-1/2 gap-5 h-[200px]  ">
                     <CustomInput label="First Name" type={""} name={""} />
                     <CustomInput label="Last Name" type={""} name={""} />
                     <div>

                        <p className="pt-[20px] flex">Select the country and city you want to show <FaPlus /></p>
                        <div className="flex gap-5 flex-wrap">
                           <CustomInput label="Country" type={""} name={""} />
                           {chooseCountryList.map((_, index) => (
                              <div key={index} className="flex gap-5 items-center justify-end">
                                 <div className="relative ">
                                    <CustomInput label="City" type={""} name={""} />
                                    <div>
                                       {chooseCountryList.length > 1 ? <div className="absolute top-[40px] right-[10px]"><RxCross2
                                          size={'20px'} /></div> : ""}
                                    </div>
                                 </div>
                              </div>
                           ))}
                        </div>
                     </div>

                     <CustomInput label="Date of birth" type={"date"} name={""} />
                     <div className="flex items-center">
                        <CustomInput label="Hourly Rate" type="number" name={"hourly-rate"} /><span className="pt-[20px] pl-[10px] text-[26px]">$/hr</span>
                     </div>

                     <div>
                        <input type="checkbox" />
                        Do you have a car?
                     </div>
                  </div>
                  <div>
                     <FlickitySlider size={400} images={imageForSlider} options={flickityOptions} />

                  </div>

               </div>

               <textarea className="p-[20px] text-[20px] w-[100%] h-[400px] border border-solid border-[#79747E]" name="" id=""></textarea>

            </div>


         </div>
      </>
   );
}

export default GuideForm;