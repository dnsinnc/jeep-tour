import { ReactNode, useRef } from "react";
import { GreenButton } from "./CustomButtons";



interface InputProps {
   width: number;
   placeholder?: string;
   label: string;
   type: string;
   icon?: ReactNode;
   onClick?: ((inputRef: React.RefObject<HTMLInputElement>) => void);
   ref?: React.MutableRefObject<string>
   pattern?: string
   autofocus?: boolean
   name: string
}




function CustomInput({ placeholder, type, label, width, icon, onClick, pattern, autofocus, name }: InputProps) {

   const inputRef = useRef(null)

   return ( 
      <div style={{ width: `${width}px` }} className="form">
         <span className="form__label">{label}</span>
         <input name={name} autoFocus={autofocus} required ref={inputRef} className="form__input" type={type} placeholder={placeholder} pattern={pattern} />
         <div onClick={() => onClick(inputRef)} className="form__icon">
            {icon}
         </div>
      </div>
    );
}

export default CustomInput;