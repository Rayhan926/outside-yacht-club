import React from "react";
import { dekstopItems } from "../../constant";

function DekstopNav() {
  return (
    <nav className="font-montserrat flex items-center gap-12 py-[23px]">
      <ul className="flex items-center gap-12">
        {dekstopItems.map(({ text, url }, i) => (
          <li key={i} className="group">
            <a
              href={url}
              className="uppercase leading-[15px] font-medium text-xs text-white italic duration-100 group-hover:text-primary"
            >
              {text}
            </a>
          </li>
        ))}
      </ul>

      <button className="bg-primary text-black px-[18px] py-[14px] text-xs font-semibold leading-[15px] rounded-md uppercase">
        Connect wallet
      </button>
    </nav>
  );
}

export default DekstopNav;
