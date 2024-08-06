

interface ButtonProps {
   children: React.ReactChild | React.ReactNode,
   width?: string;
   onClick?: () => void;
}

export function GreenButton({ children, width }: ButtonProps) {
   return (

      <button type="submit" style={{ maxWidth: `${width}` }} className="animate-pulse green-button">
         {children}
      </button>
   )
}


export function ChangeButton({ children, onClick }: ButtonProps) {
   return (
      <button onClick={onClick} type="submit" className=" animated-button text-[14px] px-[32px] h-[48px] border border-solid border-[#8DD3BB] rounded-[4px] font-montserrat-500 flex items-center gap-[4px]">
         {children}
      </button>
   )
}
