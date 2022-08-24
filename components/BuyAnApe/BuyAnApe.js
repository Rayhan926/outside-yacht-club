import Image from "next/image";
import React from "react";

function BuyAnApe() {
  return (
    <section className="mb-[130px] mt-[104px] px-6 md:px-0">
      <div
        style={{
          background:
            "linear-gradient(94.09deg, #FFF24D 0.64%, #8743CF 102.17%)",
        }}
        className="container-lg relative py-[26px] md:pt-[120px] md:pb-[80px] rounded-2xl"
      >
        <div className="container md:pl-[180px] flex items-center flex-col md:flex-row justify-between">
          <div className="md:w-[473px] space-y-[13px] text-center md:text-left">
            <h2 className="text-black title_lg">buy an ape</h2>
            <p className="body_text text-black">
              The initial sale has sold out. To get your Bored Ape, check out
              the collection on OpenSea.
            </p>
          </div>

          <button className="px-[43px] mt-[36px] md:mt-0 rounded py-[14px] bg-black text-primary uppercase font-semibold leading-[20px] text-center">
            Buy an ape <br className="hidden md:block" /> Opensea
          </button>
        </div>

        <div className="absolute -bottom-1 left-0 hidden md:block">
          <Image width={350} height={316} src="/img/buy_an-ape.png" />
        </div>
      </div>
    </section>
  );
}

export default BuyAnApe;
