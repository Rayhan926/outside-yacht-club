import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { footerIcons } from "../../constant";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="border-b border-white/40"></div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between pt-6 md:pt-[48px] pb-12 md:pb-[65px]">
          <div className="max-w-[186px] mb-11 md:mb-0 mx-auto md:mx-0">
            <Image
              src="/img/footer_logo.png"
              width={186}
              height={181}
              alt="footer logo"
              quality={100}
            />
          </div>

          <div className="space-y-10 md:w-[400px]">
            <div className="space-y-4">
              <h4 className="font-black leading-5 text-base italic uppercase">
                Get on the list
              </h4>
              <div>
                <form className="flex">
                  <input
                    type="text"
                    placeholder="Email Address"
                    className="px-4 py-2.5 bg-[#1D1D1D] placeholder:text-sm leading-[17px] placeholder:leading-[17px] placeholder:text-[#4A4A4A] text-[#f7f7f7] outline-none grow text-sm"
                  />
                  <button className="shrink-0 px-[18px] py-2.5 text-white bg-[#4A4A4A]">
                    <BsArrowRight size={16} />
                  </button>
                </form>
              </div>
            </div>

            <div>
              <ul className="flex items-center gap-x-7 gap-y-3 md:gap-2 md:justify-between flex-wrap">
                {footerIcons.map(({ icon, url }, i) => {
                  return (
                    <li key={i}>
                      <a href={url}>
                        <Image
                          src={icon}
                          width={25}
                          height={25}
                          alt="image icons"
                        />
                      </a>
                    </li>
                  );
                })}

                <li className="w-full md:w-auto">
                  <a
                    href="#"
                    className="text-primary font-semibold text-sm leading-[17px] uppercase"
                  >
                    Privacy Policy | Terms of Use
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
