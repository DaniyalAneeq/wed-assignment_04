import Image from "next/image"
import versace from "../../../public/versace.png"
import zara from "../../../public/zara.png"
import gucci from "../../../public/gucci-logo-1 1.png"
import prada from "../../../public/prada.png"
import calvin from "../../../public/calvin.png"

const Brands = () => {
  return (
    <div className="w-screen h-[11.2963vh] bg-[#000000] grid grid-cols-3 grid-rows-2 gap-4 px-4  sm:flex justify-around items-center ">
        <Image src={versace} alt="versace" 
        className="w-[116.74px] h-[23.25px] sm:w-[9.881vw] sm:h-[3.0704vh]"
        />

        <Image src={zara} alt="zara" 
        className="w-[63.81px] h-[26.65px] sm:w-[5.417vw] sm:h-[3.5185vh]"
        />

        
        <Image src={gucci} alt="gucci"
        className="w-[109.39px] h-[25.24px] sm:w-[9.286vw] sm:h-[3.3333vh]"
        />
        <Image src={prada} alt="prada"
        className="w-[127px] h-[21px] sm:w-[11.548vw] sm:h-[2.9630vh]"
        />
        <Image src={calvin} alt="calvin"
        className="w-[134.84px] h-[21.75px] sm:w-[12.309vw] sm:h-[3.0880vh]"
        />
    </div>
  )
}

export default Brands