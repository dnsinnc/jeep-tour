import { motion } from "framer-motion";
import { forwardRef, ReactNode, useRef } from "react";
// import { animText } from "../../app/MotionAnimations/animations";



interface InputProps {
   width: string;
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



export const CustomInput = forwardRef(({ placeholder, type, label, width, icon, onClick, pattern, autofocus, name }: InputProps, ref) =>{

   const inputRef = useRef(null)

   const handleClick = () => {
      if (onClick) {
         onClick(inputRef);
      }
   };

   return ( 
      <motion.div
         ref={ref}
         style={{ width: `${width}` }}
         className="form">
         {label && <span className="form__label">{label}</span>}
         <input
            className="form__input"
            name={name}
            autoFocus={autofocus}
            required ref={inputRef}
            type={type}
            placeholder={placeholder}
            pattern={pattern} />
         <div
            className="form__icon"
            onClick={handleClick} >
            {icon}
         </div>
      </motion.div>
    );
})

export const MCustomInput = motion(CustomInput);
export default CustomInput