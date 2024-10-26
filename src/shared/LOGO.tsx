import { GiJeep } from "react-icons/gi";
import { Link } from "react-router-dom";



function Logo() {
   return ( 
      <Link className='flex items-center gap-3 font-trade-gotic text-2xl' to={'/jeep-tour'}>
         Jeep Tour <GiJeep size={'42px'} />
      </Link>
    );
}

export default Logo;