import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <section className="container mt-[22px] font-montserrat">
      <div className="relative md:max-w-[1145px] rounded-xl overflow-hidden gradient_border border-2">
        <Image src="/img/hero_bg.jpg" width={1145} height={695} />

        <div className="absolute top-[150px] left-1/2 -translate-x-1/2 text-center">
          <p className="font-medium text-4xl leading-[44px italic text-white]">
            WELCOME TO
          </p>
          <h1 className="font-black text-5xl leading-[69px] whitespace-pre">
            OUTSIDE YACHT CLUB
          </h1>
          <button className="flex items-center gap-2.5 mx-auto mt-[33px] rounded-md bg-primary px-[18px] py-[14px] text-black leading-5 font-semibold">
            <Image src="/img/button_icon.svg" width={20} height={20} />
            VIEW ON OPENSEA
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
