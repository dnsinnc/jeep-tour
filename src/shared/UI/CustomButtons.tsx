

interface ButtonProps{
   children: React.ReactChild | React.ReactNode,
   width: number;
}

export function GreenButton({ children, width }: ButtonProps) {
   return (

      <button  type="submit" style={{ maxWidth: `${width}px` }} className="green-button">
            {children}
         </button>
   )
      ;
}
