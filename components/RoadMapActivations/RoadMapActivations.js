import React from "react";
import Image from "next/image";
import { roadMapSectionData } from "../../constant";
import classNames from "classnames";

function RoadMapActivations() {
  return (
    <section
      id="roadmap"
      className="pt-[64px] md:py-[103px] relative mb-[50px] md:mb-[130px] font-montserrat"
    >
      <img
        src="/img/roadmap_strokes.png"
        className="absolute top-0 left-0 w-full opacity-20 hidden md:block"
        alt="roadmap image bg"
      />
      <img
        src="/img/roadmap_strokes_mobile.png"
        className="absolute top-0 left-0 w-full opacity-20 md:hidden"
        alt="roadmap image bg"
      />
      <div
        className="absolute top-0 left-0 w-full h-full opacity-[0.37]"
        style={{
          background:
            "linear-gradient(180deg, #8743CF 0%, rgba(0, 0, 0, 0) 100%)",
        }}
      ></div>
      <div className="container relative z-[2]">
        <div className="space-y-[15px] md:w-[580px]">
          <h2 className="title_lg">Roadmap activations</h2>
          <p className="body_text">We’re in this for the long haul.</p>
          <p className="body_text">
            We’ve set up some goalposts for ourselves. Once we hit a target sell
            through percentage, we will begin to work on realizing the stated
            goal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[653px,auto] gap-[86px] mt-[55px]">
          <ul className="space-y-5">
            {roadMapSectionData.map(({ lineThrow, percentage, text }, i) => {
              return (
                <li key={i} className="flex items-start gap-11">
                  <p className="text-primary text-[13px] font-normal font-montserrat italic leading-[150%]">
                    {percentage}%
                  </p>
                  <p
                    className={classNames(
                      "text-[13px] font-medium leading-[150%]",
                      lineThrow && "line-through",
                    )}
                  >
                    {text}
                  </p>
                </li>
              );
            })}
          </ul>

          <div className="hidden lg:block">
            <Image
              src="/img/road_map_image.png"
              alt="road map image"
              width={409}
              height={372}
            />
          </div>
        </div>

        <div className="border-b border-white/40 mt-[38px] md:hidden"></div>
      </div>
    </section>
  );
}

export default RoadMapActivations;
