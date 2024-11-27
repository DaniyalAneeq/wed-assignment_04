import Image from "next/image"
import logo from "../../../public/SHOP.CO.png"
import Cart from "../../../public/cart.png"
import User from "../../../public/user.png" 
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"



const Navbar = () => {
  return (
    <div className="w-full flex justify-center overflow-hidden">
        <div className="flex items-center lg:hidden">
            <FontAwesomeIcon icon={faBars} />
        </div>
        <div className="w-[80%] py-6 flex justify-around flex-nowrap">
            <div>
                <Image src={logo} alt="logo"
                className="w-40
                h-[22px]"
                />
            </div>
            <div className="hidden w-[20.063] lg:flex gap-6 text-[#000000] font-satoshi text-base leading-[21.6px]  ">
               <a href="#">Shop <span><select name="drop" id="drop" className=""></select></span></a> 
               <a href="#">On Sale</a> 
               <a href="#">New Arrivals</a> 
               <a href="#">Brands</a> 
            </div>
            <div className="hidden lg:inline-block w-[30.052vw] h-[4.4444vh]  rounded-[62px] bg-[#F0F0F0] px-8 py-1">
               <input type="search"
               placeholder="Search for products..." 
               className="
                font-satoshi
                font-normal
                text-base
                leading-[21.6px]
                bg-[#F0F0F0]
                text-[#00000066]
               " /> 
            </div>
           
            <div className="w-[26vw] flex justify-around  lg:justify-between lg:gap-4 lg:w-[4vw] sm:[4vw]">
            <div className="lg:hidden">
                <FontAwesomeIcon icon={faMagnifyingGlass}
                className="w-6 h-6"
                />
            </div>
                <Image src={Cart} alt="cart"
                className="w-6 h-6"/>
                <Image src={User} alt="user"
                className="w-6 h-6"/>
                
            </div>
        </div>
    </div>
  )
}

export default Navbar