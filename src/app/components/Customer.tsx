import Image from "next/image"
import review from "../../../public/review.png"
import right from "../../../public/right.png"

const Customer = () => {
  return (
    <>
    <div className="w-[286px] h-[72px] sm:w-[38.929vw] sm:h-[58px] mt-[280px] lg:mt-36 text-center overflow-hidden">
        <h1 className="font-integral font-bold text-[32px] leading-8 sm:text-5xl sm:leading-[57.6px] text-[#000000]">
            OUR HAPPY CUSTOMERS
        </h1>
    </div>
    <div className="flex flex-wrap sm:flex-row mt-28 sm:mt-36 sm:gap-2 items-center mb-36  overflow-hidden">
        <div className="w-[358px] sm:w-[400px] h-[240px] rounded-[20px] border-[1px] py-7 px-8 bg-[#0000001A] flex flex-col gap-4">
            <Image src={review} alt="review" className="w-[118px] sm:w-[138.84px] h-[22.58px]"/>
            <div className="w-[310px] h-[107px] sm:w-[336px] sm:h-[124px] flex flex-col gap-4">
                <div className="flex">
                    <h1 className="w-[68px] h-3 sm:w-[85px] sm:h-[15px] font-satoshi font-bold text-base sm:text-xl leading-[22px] text-[#000000]">
                    Sarah M.
                    </h1>
                    <Image src={right} alt="right" className="w-[19px] h-[19px] sm:w-[24px] sm:h-[24px]"/>
                </div>
                <div className="w-[310px] h-20 sm:w-[336px] sm:h-[88px]">
                    <p className="font-satoshi font-normal text-sm sm:text-base leading-[22px] text-[#00000099]">
                        &quot;I&apos;m blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I&apos;ve bought has exceeded my expectations.
                        &quot;   
                    </p>        
                </div>
                

            </div>
        </div>

        {/* card2 */}
        <div className="w-[400px] h-[240px] rounded-[20px] border-[1px] py-7 px-8 bg-[#0000001A] flex-col gap-4 hidden lg:flex">
            <Image src={review} alt="review" className="w-[138.84px] h-[22.58px]"/>
            <div className="w-[336px] h-[124px] flex flex-col gap-4">
                <div className="flex">
                    <h1 className="w-[85px] h-[15px]    font-satoshi font-bold text-xl leading-[22px] text-[#000000]">
                    Alex K.
                    </h1>
                    <Image src={right} alt="right" className="w-[24px] h-[24px]"/>
                </div>
                <div className="w-[336px] h-[88px]">
                    <p className="font-satoshi font-normal text-base leading-[22px] text-[#00000099]">
                        &quot;
                        Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.
                        &quot;   
                    </p>        
                </div>
                

            </div>
        </div>

        {/* card3 */}
        <div className="w-[400px] h-[240px] rounded-[20px] border-[1px] py-7 px-8 bg-[#0000001A] flex-col gap-4 hidden lg:flex">
            <Image src={review} alt="review" className="w-[138.84px] h-[22.58px]"/>
            <div className="w-[336px] h-[124px] flex flex-col gap-4">
                <div className="flex">
                    <h1 className="w-[85px] h-[15px]    font-satoshi font-bold text-xl leading-[22px] text-[#000000]">
                        James L.
                    </h1>
                    <Image src={right} alt="right" className="w-[24px] h-[24px]"/>
                </div>
                <div className="w-[336px] h-[88px]">
                    <p className="font-satoshi font-normal text-base leading-[22px] text-[#00000099]">
                        &quot;
                        As someone who&apos;s always on the lookout for unique fashion pieces, I&apos;m thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.
                        &quot;   
                    </p>        
                </div>
                

            </div>
        </div>
    </div>
    </>
  )
}

export default Customer