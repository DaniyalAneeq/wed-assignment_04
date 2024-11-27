import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";



const Sign = () => {
  return (
    <div className="bg-[#000000] text-[#FFFFFF] max-w-full h-[38px] flex items-center justify-between px-2 sm:px-4 sm:pl-[40vw] overflow-hidden"> 
        <p className="font-satoshi text-sm font-normal leading-[18.9px]">
            Sign up and get 20% off to your first order. <span className="font-satoshi font-medium underline decoration-solid">Sign Up Now</span>
        </p>
        <div className="hidden sm:inline-block">
            <FontAwesomeIcon icon={faXmark}/>
        </div>
    </div>
  )
}

export default Sign