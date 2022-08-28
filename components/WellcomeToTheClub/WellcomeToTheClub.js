import classNames from "classnames";
import React from "react";
import { wellcomeToTheClubData } from "../../constant";
import Image from "next/image";

function WellcomeToTheClub() {
  return (
    <section className="mt-9 md:mt-[65px]">
      <div className="container">
        <div className="space-y-[50px] md:space-y-[75px] pb-[65px]">
          <div className="space-y-[15px] md:w-[750px]">
            <h2 className="title_lg">WELCOME TO THE OSYC</h2>
            <p className="body_text">
              When you buy Ape, you’re not simply buying an avatar or a
              provably-rare piece of art. You are gaining membership access to a
              club whose benefits and offerings will increase over time. Your
              Bored Ape can serve as your digital identity, and open digital
              doors for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-[72px]">
            {wellcomeToTheClubData.map(({ desc, img, mobile }, i) => (
              <div
                key={i}
                className="space-y-5 flex items-center gap-x-9 md:block"
              >
                <div
                  className={classNames(
                    mobile,
                    "flex justify-center md:min-h-[128px]",
                  )}
                >
                  <Image {...img} alt="Welcome to the club" quality={100} />
                </div>

                <p className="body_text md:text-center">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="border-b border-white/40"></div>
      </div>
    </section>
  );
}

export default WellcomeToTheClub;
