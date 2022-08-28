import Image from "next/image";
import React from "react";

function BuyAnApe() {
  return (
    <section
      className="mt-[54px] md:mb-[130px] md:mt-[104px] px-6 md:px-0 scroll-mt-12"
      id="buy-an-ape"
    >
      <div
        style={{
          background:
            "linear-gradient(94.09deg, #FFF24D 0.64%, #8743CF 102.17%)",
        }}
        className="container-lg relative py-[26px] md:py-0 md:h-[280px] flex justify-between items-center rounded-2xl"
      >
        <div className="container md:pl-[180px] flex items-center flex-col md:flex-row justify-between">
          <div className="md:w-[473px] space-y-[13px] text-center md:text-left">
            <h2 className="text-black title_lg">Follow us</h2>
            <p className="body_text text-black">
              You now have the time to join us in our community
            </p>
          </div>

          <button className="px-[43px] mt-[36px] md:mt-0 rounded py-[14px] bg-black text-primary uppercase font-semibold leading-[20px] text-center">
            Buy an ape <br className="hidden md:block" /> Opensea
          </button>
        </div>

        <div className="absolute -bottom-1.5 left-0 hidden md:block">
          <Image
            width={350}
            height={316}
            src="/img/buy_an-ape.png"
            quality={100}
            alt="Buy an ape"
          />
        </div>
      </div>

      <div className="pb-[60px] md:pb-0 border-b border-white/20 md:hidden"></div>
    </section>
  );
}

export default BuyAnApe;
