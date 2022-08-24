import classNames from "classnames";
import React from "react";
import { wellcomeToTheClubData } from "../../constant";
import Image from "next/image";

function WellcomeToTheClub() {
  return (
    <section className="mt-[65px]">
      <div className="container space-y-[75px] border-b border-white/40 pb-[65px]">
        <div className="space-y-[15px] md:w-[750px]">
          <h2 className="title_lg">Welcome to the club</h2>
          <p className="body_text">
            When you buy a Bored Ape, you’re not simply buying an avatar or a
            provably-rare piece of art. You are gaining membership access to a
            club whose benefits and offerings will increase over time. Your
            Bored Ape can serve as your digital identity, and open digital doors
            for you.
          </p>
        </div>

        <div className="grid grid-cols-5 gap-[72px]">
          {wellcomeToTheClubData.map(({ desc, img, mobile }, i) => (
            <div key={i} className="space-y-5">
              <div className={classNames(mobile, "flex justify-center")}>
                <Image {...img} />
              </div>

              <p className="body_text text-center">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WellcomeToTheClub;
