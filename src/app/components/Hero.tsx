import Image from "next/image"
import modles from "../../../public/modles.png"




const Hero = () => {
  return (
    <>
    <div className="w-full lg:h-[68.1429vh] bg-[#F2F0F1] flex flex-col lg:flex-row lg:flex-nowrap overflow-hidden">
        <section className="right-side w-[100%] sm:w-[50%] ml-[5.208vw] pt-[6.7593vh] ">
            <h1 className="text-[#000000] leading-[34px]
            font-integral font-bold text-4xl sm:text-[64px] w-[315px] h-[93px] sm:w-[577px] sm:h-[16.0185vh] sm:leading-[64px] ">
                FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            <p className="w-[340px] h-[50px] leading-5 sm:w-[555px] sm:h-[39px] sm:leading-[22px] font-satoshi font-normal text-base  text-[#00000099] mt-8 lg:mt-16">
            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
            </p>
            <div className="w-[330px] lg:w-[210px] lg:h-[52px] text-center rounded-[62px] lg:px-[50px] py-4 bg-[#000000] my-14 lg:my-7">
              <button className="font-satoshi font-medium text-base leading-[21.6px] text-[#FFFFFF]">
                Shop Now
              </button>
            </div>
            <div className="flex-wrap mr-[15px] lg:w-[569px] lg:h-[74px] flex justify-evenly mb-20 lg:mb-0">
              <div className="w-[143px] h-[74]">
                <h1 className="font-satoshi font-medium text-[40px] leading-[54px] text-[#000000]">200+</h1>
                <p className="font-satoshi font-normal text-base leading-[22px] text-[#00000099]">International Brands</p>
              </div>
              <div className="w-[158px] h-[74]">
                <h1 className="font-satoshi font-bold text-[40px] leading-[54px] text-[#000000]">2,000+</h1>
                <p className="font-satoshi font-normal text-base leading-[22px] text-[#00000099]">High-Quality Products</p>
              </div>
              <div className="w-[171px] h-[74px]">
                <h1 className="font-satoshi font-bold text-[40px] leading-[54px] text-[#000000]">30,000+</h1>
                <p className="font-satoshi font-normal text-base leading-[22px] text-[#00000099]">Happy Customers</p>
              </div>
            </div>
        </section>

        <section className="left-side lg:mt-0 w-screen lg:w-[50%]">
          <Image src={modles} alt="models"
          className="w-screen lg:w-[40vw] lg:h-[68.1429vh]"/>
        </section>
        
    </div>
   
    </>
  )
}

export default Hero