import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import Image from "next/image";
import visa from "../../../public/Visa.png"
import Mastercard from "../../../public/Mastercard.png"
import Paypal from "../../../public/Paypal.png"
import Pay from "../../../public/Pay.png"
import G_Pay from "../../../public/G_Pay.png"

const Footer = () => {
  return (
    <>
      <div className="w-full bg-[#0000001A] flex flex-col items-center">
        <div className="w-[350px] h-[293px] lg:w-[73.81vw] lg:h-[17.1429vh] bg-[#000000] flex flex-col gap-8 rounded-[20px] py-2 px-8 lg:px-16 lg:flex-row lg:justify-between">
          <h1 className="w-[297px] h-[105px] lg:w-[551px] lg:h-[94px] font-integral font-bold text-[32px] leading-[35px] lg:text-[2.381vw] lg:leading-[45px] text-[#FFFFFF]">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </h1>
          <div className="flex flex-col gap-4 w-[20.774vw] h-[10.2857]">
            <div className="w-[311px] h-[42px] lg:w-[20.774vw] lg:h-[4.5714vh] rounded-[62px] py-3 px-4 bg-[#FFFFFF] flex gap-2">
              <div className="w-[20px] h-[20px] lg:w-[1.429vw] lg:h-[2.2857vh] bg-[#00000066]"></div>
              <div className="w-[151px] h-[19px] lg:w-[10.298vw] lg:h-[2.0952vh] text-[#00000066] font-satoshi font-normal text-sm lg:text-base leading-[18.9px] lg:leading-[21.6px]">
                <input type="email" placeholder="Enter your email address" />
              </div>
            </div>

            <div className="w-[311px] h-[42px] lg:w-[20.774vw] lg:h-[4.5714vh] rounded-[62px] py-3 px-4 bg-[#FFFFFF] flex justify-center items-center">
              <p
                className="font-satoshi font-medium text-sm lg:text-base
                    leading-[18.9px] lg:leading-[21.6px] text-[#000000]"
              >
                Subscribe to Newsletter
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="w-full h-full  lg:h-[47.5238vh] bg-[#F0F0F0] flex flex-col items-center">
          <div className="w-full h-screen lg:w-[73.81vw] lg:h-[19.5571vh] flex flex-col lg:flex-row lg:justify-between mt-20 sm:flex-wrap px-6">
            <div className="w-[340px] h-[180px] lg:w-[248px] lg:h-[180px] flex flex-col justify-between">
              <div
                className="w-36 h-5 lg:w-[248px] lg:h-[177px]
                    flex flex-col gap-8"
              >
                <h1 className="font-integral font-bold text-[28.85px] leading-[34.62px] lg:text-[33.45px] lg:leading-[40.15px] text-[#000000]">
                  SHOP.CO
                </h1>
                <p className="w-[335px] lg:w-[242px] lg:h-[40px] font-satoshi font-normal text-sm leading-[20px] lg:leading-[22px] text-[#00000099]">
                  We have clothes that suits your style and which you&apos;re proud
                  to wear. From women to men.
                </p>
              </div>
              <div className="w-[148px] h-7 lg:w-[8.81vw] lg:h-[4.6667vh] border-[1px] flex justify-between items-center mb-4 lg:mb-0">
                <div className="w-7 h-7 border-[1px] bg-[#FFFFFF] rounded-[50%] flex justify-center items-center">
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="w-[11.7px] h-[9.03px]"
                  />
                </div>

                {/* facebook */}
                <div className="w-7 h-7 border-[1px] bg-[#000000] rounded-[50%] flex justify-center items-center">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="w-[11.7px] h-[9.03px] text-white"
                  />
                </div>

                {/* instagram */}
                <div className="w-7 h-7 border-[1px] bg-[#FFFFFF] rounded-[50%] flex justify-center items-center">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="w-[11.7px] h-[9.03px]"
                  />
                </div>

                {/* github */}
                <div className="w-7 h-7 border-[1px] bg-[#FFFFFF] rounded-[50%] flex justify-center items-center">
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="w-[11.7px] h-[9.03px]"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-14 lg:flex-row  lg:w-[800px] lg:justify-between lg:gap-32">
              <div className="lg:w-[450px] flex justify-between">
                <div className="w-[91px] h-[146px] lg:w-[104px] lg:h-[180px] flex flex-col justify-between">
                  <div className="w-[91px] h-[18px] lg:w-[104px] lg:h-5">
                    <h1 className="font-satoshi font-medium text-sm lg:text-base leading-[18px] tracking-[3px] text-[#000000]">
                      COMPANY
                    </h1>
                  </div>

                  <div className="w-[91px] h-[112px] lg:w-[104px] lg:h-[133px] flex flex-col justify-between text-[#00000099]">
                    <p>About</p>
                    <p>Features</p>
                    <p>Works</p>
                    <p>Career</p>
                  </div>
                </div>

                <div className="w-[121px] h-[146px] lg:w-[136px] lg:h-[180px] flex flex-col justify-between">
                  <div className="w-11 h-[18px] lg:w-[104px] lg:h-5">
                    <h1 className="font-satoshi font-medium text-sm lg:text-base leading-[18px] tracking-[3px] text-[#000000]">
                      HELP
                    </h1>
                  </div>

                  <div className="w-[121px] h-[112px] lg:w-[136px] lg:h-[133px] flex flex-col justify-between text-[#00000099]">
                    <p>Customer Support</p>
                    <p>Delivery Details</p>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                  </div>
                </div>
              </div>

              <div className="lg:w-[450px] flex justify-between">
                <div className="w-[121px] h-[146px] lg:w-[149px] lg:h-[180px] flex flex-col justify-between">
                  <div className="w-[36px] h-5">
                    <h1 className="font-satoshi font-medium text-sm lg:text-base leading-[18px] tracking-[3px] text-[#000000]">
                      FAQ
                    </h1>
                  </div>

                  <div className="w-[121px] h-[112px] lg:w-[136px] lg:h-[133px] flex flex-col justify-between text-[#00000099]">
                    <p>Account</p>
                    <p>Manage Deliveries</p>
                    <p>Orders</p>
                    <p>Pyments</p>
                  </div>
                </div>

                <div className="w-[159px] h-[146px] lg:w-[149px] lg:h-[180px] flex flex-col justify-between">
                  <div className="w-[107px] h-[18px] lg:w-[118px] lg:h-5">
                    <h1 className="font-satoshi font-medium text-sm lg:text-base leading-[18px] tracking-[3px] text-[#000000]">
                      RESOURCES
                    </h1>
                  </div>

                  <div className="w-[159px] h-[112px] lg:w-[136px] lg:h-[133px] flex flex-col justify-between text-[#00000099]">
                    <p>Free eBooks</p>
                    <p>Development Tutorial</p>
                    <p>How to - Blog</p>
                    <p>YouTube Playlist</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="my-8 w-[358px] h-1 border-[1px] bg-[#0000001A] lg:w-[1240px] lg:h-1"></div>
          <div className="w-[358px] lg:w-[1240px] flex flex-col gap-4 lg:flex-row lg:justify-between items-center">
            <div className="w-[278px] h-[19px] ">
                <p className="font-satoshi font-bold text-sm leading-[18.9px] text-[#00000099]">
                    Shop.co &copy; 2000-2023, All Rights Reserved
                </p>
            </div>
            <div className="w-[240.93px] h-[25.74px] sm:w-[281.07px] sm:h-[30.03px] flex justify-between pb-20">
                <div className="w-[39.69px] h-[25.74px] sm:w-[46.61px] sm:h-[30.03px] bg-[#FFFFFF] border-[0.22px] rounded-[5.38px] flex items-center justify-center">
                    <Image src={visa} alt="visa"/>
                </div>
                <div className="w-[39.69px] h-[25.74px] sm:w-[46.61px] sm:h-[30.03px] bg-[#FFFFFF] border-[0.22px] rounded-[5.38px] flex items-center justify-center">
                    <Image src={Mastercard} alt="Mastercard"/>
                </div>
                <div className="w-[39.69px] h-[25.74px] sm:w-[46.61px] sm:h-[30.03px] bg-[#FFFFFF] border-[0.22px] rounded-[5.38px] flex items-center justify-center">
                    <Image src={Paypal} alt="Paypal"/>
                </div>
                <div className="w-[39.69px] h-[25.74px] sm:w-[46.61px] sm:h-[30.03px] bg-[#FFFFFF] border-[0.22px] rounded-[5.38px] flex items-center justify-center">
                    <Image src={Pay} alt="Pay"/>
                </div>
                <div className="w-[39.69px] h-[25.74px] sm:w-[46.61px] sm:h-[30.03px] bg-[#FFFFFF] border-[0.22px] rounded-[5.38px] flex items-center justify-center">
                    <Image src={G_Pay} alt="G_Pay"/>
                </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
