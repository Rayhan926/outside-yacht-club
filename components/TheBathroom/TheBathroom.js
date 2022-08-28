import React from "react";
import Image from "next/image";

function TheBathroom() {
  return (
    <section className="mb-[75px] md:mb-[130px]">
      <div className="container pt-[65px] grid grid-cols-1 md:grid-cols-[725px,auto] gap-11 md:gap-[240px]">
        <div className="space-y-[15px]">
          <h2 className="title_lg">The Housewell</h2>
          <p className="body_text">
            The BAYC Bathroom will become operational once the presale period is
            over. It contains a canvas accessible only to wallets containing at
            least one ape. Like any good dive bar bathroom, this is the place to
            draw, scrawl, or write expletives.
          </p>
          <p className="body_text">
            Each ape-holder will be able to paint a pixel on the bathroom wall
            every fifteen minutes. Think of it as a collaborative art experiment
            for the cryptosphere. A members-only canvas for the discerning minds
            of crypto twitter.
          </p>
          <p className="body_text">
            We&apos;re pretty sure it&apos;s going to be full of dicks.
          </p>
        </div>

        <div className="md:max-w-[206px] flex justify-center md:block">
          <Image
            src="/img/house-well.png"
            alt="Commet image"
            width={246}
            height={338}
            quality={100}
          />
        </div>
      </div>
    </section>
  );
}

export default TheBathroom;
