import Image from "next/image";
import React from "react";

function RiseOfOutside() {
  return (
    <section className="container mt-[69px] md:mt-[145px]">
      <div className="grid grid-cols-1 md:grid-cols-[581px,auto] gap-[25px] md:gap-[147px]">
        <div className="space-y-[15px]">
          <h2 className="title_lg">
            <p>Rise of the</p> outside yach club
          </h2>
          <p className="body_text">
            BAYC is a collection of 10,000 Bored Ape NFTs—unique digital
            collectibles living on the Ethereum blockchain. Your Bored Ape
            doubles as your Yacht Club membership card, and grants access to
            members-only benefits, the first of which is access to THE BATHROOM,
            a collaborative graffiti board. Future areas and perks can be
            unlocked by the community through roadmap activation.
          </p>
        </div>

        <div className="md:max-w-[420px]">
          <img src="/img/rise_of_outside_image.png" width={420} height={395} />
        </div>
      </div>
    </section>
  );
}

export default RiseOfOutside;
