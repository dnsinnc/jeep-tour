import { motion } from "framer-motion";
import { forwardRef, ReactNode, useRef } from "react";
// import { animText } from "../../app/MotionAnimations/animations";



interface InputProps {
   placeholder?: string;
   label?: string;
   type: string;
   icon?: ReactNode;
   onClick?: (inputRef: React.RefObject<HTMLInputElement>) => void;
   ref?: React.MutableRefObject<string>
   pattern?: string
   autofocus?: boolean
   name: string
   
}



export const CustomInput = forwardRef(({ placeholder, type, label,  icon, onClick, pattern, autofocus, name }: InputProps, ref) =>{

   const inputRef = useRef(null)

   const handleClick = () => {
      if (onClick) {
         onClick(inputRef);
      }
   };

   return ( 
      <motion.div
         ref={ref}
         
         className="mt-[20px] relative">
         {label && <span className="px-[8px] h-[17px] bg-[white] block absolute -top-[10px] left-[20px] z-10">{label}</span>}
         <input
         className="form-input"
            name={name}
            autoFocus={autofocus}
            required ref={inputRef}
            type={type}
            placeholder={placeholder}
            pattern={pattern} />
         <div
            className="form-icon"
            onClick={handleClick} >
            {icon}
         </div>
      </motion.div>
    );
})

export const MCustomInput = motion(CustomInput);
export default CustomInput