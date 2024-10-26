

interface ButtonProps {
   children: React.ReactChild | React.ReactNode,
   width?: string;
   onClick?: () => void;
   img?: React.ReactElement
}

export function GreenButton({ img, onClick, children, width }: ButtonProps) {
   return (

      <button onClick={onClick} type="submit" style={{ maxWidth: `${width}` }} className="items-center flex gap-2 button green-button hover:bg-[#66b798]">
         {img} 
         {children}
      </button>
   )
}


export function TransparentButton({ children, onClick, width }: ButtonProps) {
   return (
      <button onClick={onClick} style={{ maxWidth: `${width}` }} type="submit" className="tranparent-button">
          {children}
      </button>
   )
}
