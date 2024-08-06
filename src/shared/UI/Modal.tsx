

interface ModalProps{
   children: React.ReactNode
   state: boolean
}

const Modal = ({ children, state }: ModalProps) => {


   if (state) {
      return (
         <div>
            {children}
         </div>
      )
   }
  
}


export default Modal