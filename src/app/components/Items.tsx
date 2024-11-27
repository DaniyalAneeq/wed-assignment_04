import Image from "next/image"
import shirt1 from "../../../public/shirt1.png"
import stars1 from "../../../public/stars1.png"
import pent1 from "../../../public/pent1.png"
import stars2 from "../../../public/stars2.png"
import shirt_card3 from "../../../public/card3-img-3.png"
import shirt_card4 from "../../../public/card4-shirt4.png"
import shirt2 from "../../../public/shirt2.png"
import stars5 from "../../../public/stars5.png"
import shirts2 from "../../../public/card2-shirts2.png"
import star4_0_5 from "../../../public/stars-405.png"
import shorts from "../../../public/shorts.png"
import short_star from "../../../public/short_star.png"
import pent2 from "../../../public/pent2.png"
import Dress from "./Dress"

const Items = () => {
  return (
    <>
    <div className="w-full h-screen flex flex-col items-center">
        <div className="w-[269px] h-[38px] sm:w-[23.988vw] sm:h-[5.5238vh] mt-24">
            <h1 className="font-integral font-bold text-[32px] sm:text-[2.857vw] leading-[57.18px] text-[#000000]">
                NEW ARRIVALS
            </h1>
        </div>

        <div className="card grid grid-cols-2 gap-5 lg:gap-6 lg:flex">
          {/* card1 */}
          <div className="flex flex-col gap-2 ml-2">
            <div className="w-[158px] h-[170.01px] lg:w-[295px] lg:h-[298px] bg-[#F0EEED] rounded-[13.42px] lg:rounded-[20px] mt-20">
            <Image src={shirt1} alt="shirt1"/>
            </div>
            <div className="w-[158px] h-[22px] lg:w-[16.393vw] lg:[2.5714vh]"> 
              <h1 className="font-satoshi font-bold text-xs leading-[21.6px] lg:text-xl lg:leading-[27px] text-[#000000]">
              T-Shirt WITH TAPE <span>DETAILS</span> 
              </h1>
            </div>
            <Image src={stars1} alt="stars1" className="w-[120px] h-[15px]  lg:w-[150px] lg:h-[19px]"/>
            <p className="font-satoshi font-bold text-xl lg:text-2xl leading-[32.4px] text-[#000000]">
              $120
            </p>
          </div>
          
          {/* Card2 */}
          <div className="flex flex-col gap-2">
            <div className="w-[158px] h-[170.01px] lg:w-[295px] lg:h-[298px] bg-[#F0EEED] rounded-[13.42px] lg:rounded-[20px] mt-20 flex items-center overflow-hidden justify-center">
            <Image src={pent1} alt="pent1" className="w-[130px] h-[200px] lg:w-[180px] lg:h-[250px]
            "/>
            </div>
            <h1 className="font-satoshi font-bold text-xs leading-[21.6px] lg:text-xl lg:leading-[27px] text-[#000000]">
            Skinny Fit Jeans
            </h1>
            <Image src={stars2} alt="stars2" className="w-[120px] h-[15px] lg:w-[150px] lg:h-[19px]"/>
            <div className="flex gap-1">
              <p className="w-[50px] lg:w-[61px] h-[32px] font-satoshi font-bold text-xl lg:text-2xl leading-[32.4px] text-[#000000]">
              $240
              </p>
              <p className="w-[50px] lg:w-[61px] h-[32px] font-satoshi font-bold text-xl lg:text-2xl leading-[32.4px] text-[#00000066] line-through">
              $240
              </p>
              <div className="w-[40px] lg:w-[58px] h-7 rounded-[62px] py-[6px] px-[14px] bg-[#FF33331A]">
                <p className="font-satoshi font-medium text-[10px] lg:text-xs leading-[16.2px] text-[#FF3333]">
                  -20%
                </p>
              </div>
            </div>
          </div>

          {/* Card3 */}
          <div className="hidden lg:flex flex-col gap-2">
            <div className="w-[295px] h-[298px] bg-[#F0EEED] rounded-[20px] mt-20 overflow-hidden">
            <Image src={shirt_card3} alt="shirt_card3"/>
            </div>
            <h1 className="font-satoshi font-bold text-xl leading-[27px] text-[#000000]">
            Checkered Shirt
            </h1>
            <Image src={stars1} alt="stars1" className="w-[150px] h-[19px]"/>
            <p className="font-satoshi font-bold text-2xl leading-[32.4px] text-[#000000]">
              $180
            </p>
          </div>


          {/* Card4 */}
          <div className="hidden lg:flex flex-col gap-2">
            <div className="w-[295px] h-[298px] bg-[#F0EEED] rounded-[20px] mt-20 flex items-center overflow-hidden justify-center">
            <Image src={shirt_card4} alt="shirt_card4" className="
            "/>
            </div>
            <h1 className="font-satoshi font-bold text-xl leading-[27px] text-[#000000]">
            Sleeve Striped T-shirt
            </h1>
            <Image src={stars2} alt="stars2" className="w-[150px] h-[19px]"/>
            <div className="flex gap-1">
              <p className="w-[61px] h-[32px] font-satoshi font-bold text-2xl leading-[32.4px] text-[#000000]">
              $130
              </p>
              <p className="w-[61px] h-[32px] font-satoshi font-bold text-2xl leading-[32.4px] text-[#00000066] line-through">
              $160
              </p>
              <div className="w-[58px] h-7 rounded-[62px] py-[6px] px-[14px] bg-[#FF33331A]">
                <p className="font-satoshi font-medium text-xs leading-[16.2px] text-[#FF3333]">
                -30%
                </p>
              </div>
            </div>
          </div>

        </div>

        <button className="w-[338px] h-[46px] lg:w-[218px] lg:h-[52px] rounded-[62px] py-4 px-[54px] bg-[#0000001A] mt-14 flex items-center justify-center ">
            <p className="font-satoshi font-medium text-base leaind-[21.6px] text-[#000000]">
              View All 
            </p>
        </button>
        
        {/* Line */}
        <div className="w-[73.81vw] border-b-2 bg-[#0000001A] mt-12"></div>

        {/* Top Selling */}
        <div className="w-[269px] h-[38px] sm:w-[23.988vw] sm:h-[5.5238vh] mt-24">
            <h1 className="font-integral font-bold text-[32px] sm:text-[2.857vw] leading-[57.18px] text-[#000000]">
                TOP SELLING
            </h1>
        </div>

        <div className="card grid grid-cols-2 gap-5 lg:gap-6 lg:flex">
          {/* card1 */}
          <div className="flex flex-col gap-2 ml-2">
            <div className="w-[158px] h-[170.01px] lg:w-[295px] lg:h-[298px] bg-[#F0EEED] rounded-[13.42px] lg:rounded-[20px] mt-20">
            <Image src={shirt2} alt="shirt2"/>
            </div>
            <div className="w-[158px] h-[22px] lg:w-[16.393vw] lg:[2.5714vh]"> 
              <h1 className="font-satoshi font-bold text-xs leading-[21.6px] lg:text-xl lg:leading-[27px] text-[#000000]">
                Vertical Striped Shirt 
              </h1>
            </div>
            <Image src={stars5} alt="stars5" className="w-[120px] h-[15px]  lg:w-[150px] lg:h-[19px]"/>
            <div className="flex gap-1">
              <p className="w-[50px] lg:w-[61px] h-[32px] font-satoshi font-bold text-xl lg:text-2xl leading-[32.4px] text-[#000000]">
                $212
              </p>
              <p className="w-[50px] lg:w-[61px] h-[32px] font-satoshi font-bold text-xl lg:text-2xl leading-[32.4px] text-[#00000066] line-through">
                $232
              </p>
              <div className="w-[40px] lg:w-[58px] h-7 rounded-[62px] py-[6px] px-[14px] bg-[#FF33331A]">
                <p className="font-satoshi font-medium text-[10px] lg:text-xs leading-[16.2px] text-[#FF3333]">
                  -20%
                </p>
              </div>
            </div>
          </div>
          
          {/* Card2 */}
          <div className="flex flex-col gap-2">
            <div className="w-[158px] h-[170.01px] lg:w-[295px] lg:h-[298px] bg-[#F0EEED] rounded-[13.42px] lg:rounded-[20px] mt-20 flex items-center overflow-hidden justify-center">
            <Image src={shirts2} alt="shirts2" className="w-[130px] h-[200px] lg:w-[180px] lg:h-[250px]
            "/>
            </div>
            <h1 className="font-satoshi font-bold text-xs leading-[21.6px] lg:text-xl lg:leading-[27px] text-[#000000]">
            Courage Graphic T-shirt
            </h1>
            <Image src={star4_0_5} alt="star4_0_5" className="w-[120px] h-[15px] lg:w-[150px] lg:h-[19px]"/>
            <p className="font-satoshi font-bold text-xl lg:text-2xl leading-[32.4px] text-[#000000]">
              $145
            </p>
          </div>

          {/* Card3 */}
          <div className="hidden lg:flex flex-col gap-2">
            <div className="w-[295px] h-[298px] bg-[#F0EEED] rounded-[20px] mt-20 overflow-hidden">
            <Image src={shorts} alt="shorts"/>
            </div>
            <h1 className="font-satoshi font-bold text-xl leading-[27px] text-[#000000]">
              Loose Fit Bermuda Shorts
            </h1>
            <Image src={short_star} alt="short_star" className="w-[150px] h-[19px]"/>
            <p className="font-satoshi font-bold text-2xl leading-[32.4px] text-[#000000]">
              $80
            </p>
          </div>


          {/* Card4 */}
          <div className="hidden lg:flex flex-col gap-2">
            <div className="w-[295px] h-[298px] bg-[#F0EEED] rounded-[20px] mt-20 flex items-center overflow-hidden justify-center">
            <Image src={pent2} alt="pent2" className="
            "/>
            </div>
            <h1 className="font-satoshi font-bold text-xl leading-[27px] text-[#000000]">
            Faded Skinny Jeans
            </h1>
            <Image src={stars1} alt="stars1" className="w-[150px] h-[19px]"/>
            <p className="font-satoshi font-bold text-xl lg:text-2xl leading-[32.4px] text-[#000000]">
              $210
            </p>
          </div>

        </div>

        <button className="w-[338px] h-[46px] lg:w-[218px] lg:h-[52px] rounded-[62px] py-4 px-[54px] bg-[#0000001A] mt-14 flex items-center justify-center mb-24">
            <p className="font-satoshi font-medium text-base leaind-[21.6px] text-[#000000]">
              View All 
            </p>
        </button>

        {/* Brows By Dress */}
        <Dress/>
       
    </div>
   
    </>
  )
}

export default Items