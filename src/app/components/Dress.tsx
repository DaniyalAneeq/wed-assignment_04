import Image from "next/image"
import casual from "../../../public/frame1-casual.png"
import formal from "../../../public/frame2-formal.png"
import party from "../../../public/party.png"
import gym from "../../../public/gym.png"
import Customer from "./Customer"
import Footer from "./Footer"

const Dress = () => {
  return (
    <div>
        <section className="w-[358px] sm:w-[73.75vw] h-[1239px] rounded-[40px] bg-[#F0F0F0] flex flex-col items-center ml-5 overflow-hidden">
          <div className="w-[246px] h-10 sm:w-[42.893vw] sm:h-[58px] py-16 ">
            <h1 className="font-integral font-bold text-[32px] leading-9 sm:text-5xl sm:leading-[57.6px] ">
              BROWSE BY DRESS STYLE
            </h1>
          </div>
          <div className="pt-40 flex flex-col gap-10 lg:gap-12">
              <div className="flex flex-col lg:flex-row lg:gap-2 gap-10">
                  <div className="w-[310px] h-[190px] lg:w-[24.226vw] lg:h-[27.5238vh]">
                    <Image src={casual} alt="casual" />
                  </div>
                  <div className="w-[310px] h-[190px] lg:w-[40.714vw] lg:h-[27.5238vh]">
                    <Image src={formal} alt="formal"
                    className="h-[200px] lg:h-auto"/>
                  </div>
              </div> 
              <div className=" flex flex-col lg:flex-row lg:gap-2">
                  <div className="w-[310px] h-[190px] lg:w-[40.714vw] lg:h-[27.5238vh]">
                    <Image src={party} alt="party"
                    className="h-[190px] lg:h-[27.5238vh]"
                    />
                  </div>
                  <div className="w-[310px] h-[190px] lg:w-[24.226vw] lg:h-[25.5238vh]">
                    <Image src={gym} alt="gym"/>
                  </div>
              </div>  
          </div>
        </section>
        <Customer/>
        <Footer/>
    </div>
  )
}

export default Dress