import React from "react";
import Image from "next/image";

function TheBathroom() {
  return (
    <section className="mb-[130px]">
      <div className="container pt-[65px] grid grid-cols-[725px,auto] gap-[240px]">
        <div className="space-y-[15px]">
          <h2 className="title_lg">The BATHROOM</h2>
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
            We're pretty sure it's going to be full of dicks.
          </p>
        </div>

        <div className="md:max-w-[206px]">
          <Image
            src="/img/commet.png"
            alt="Commet image"
            width={206}
            height={324}
          />
        </div>
      </div>
    </section>
  );
}

export default TheBathroom;
