import Flickity from "react-flickity-component";
import './flickity.css'

interface Options {
   initialIndex: number,
   autoPlay: boolean | number
}

interface imageForSlider {
   id: number[],
   images: string[];
}


interface SliderProps {
   images: imageForSlider | undefined,
   options: Options,
   size?: number
}

function FlickitySlider({ images, options, size }: SliderProps) {
   return (

      
      <>
         <Flickity
            className={size ? `w-[${size}px]` : 'w-[600px]'}
            elementType="div"
            disableImagesLoaded={false}
            options={options}
            reloadOnUpdate
         >

            {images ?
               images.id.map((index: number) => {
                  return (
                     <div  className="overflow-hidden ">
                        <div>
                           <img  src={images['images'][index - 1]} alt="" />
                        </div>
                     </div>
                  )
               }) :
               " "
            }


         </Flickity>
      </>
   );
}

export default FlickitySlider;