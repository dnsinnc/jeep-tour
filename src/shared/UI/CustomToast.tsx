import { FaCircleCheck } from "react-icons/fa6";
import { FaInfoCircle } from "react-icons/fa";
import { RiErrorWarningFill } from "react-icons/ri";

import { AiFillCloseCircle } from "react-icons/ai";

export enum ToastVariant {
   success = 'Success',
   error = 'Error',
   info = 'Info',
   warning = 'Warning',
}

interface ToastProps {
   children: React.ReactNode;
   variant?: ToastVariant;
}

const CustomToast: React.FC<ToastProps> = ({ variant, children }) => {
   const variantStyles = {
      [ToastVariant.success]: {
         backgroundColor: 'bg-[green]',
         textColor: 'text-[green]',
         icon: <FaCircleCheck />,
      },
      [ToastVariant.error]: {
         backgroundColor: 'bg-[red]',
         textColor: 'text-[red]',
         icon: <AiFillCloseCircle />,
      },
      [ToastVariant.warning]: {
         backgroundColor: 'bg-[orange]',
         textColor: 'text-[orange]',
         icon: <RiErrorWarningFill />,
      },
      [ToastVariant.info]: {
         backgroundColor: 'bg-[blue]',
         textColor: 'text-[blue]',
         icon: <FaInfoCircle />,
      },
   };

   const { backgroundColor, textColor, icon } = variantStyles[variant || ToastVariant.info]; 
   return (
      <div className="succses-mess show-mess text-[red]">
         <div className="flex flex-col">
            <div className="flex">
               <span className={`${backgroundColor}`}> </span>
               <p className={`flex justify-center gap-4 items-center ${textColor}`}>
                  {icon} {variant}
               </p>
            </div>
            <p className="text-[black] pl-[40px] font-montserrat-500 text-[20px]">
               {children}
            </p>
         </div>
      </div>
   );
};

export default CustomToast;

