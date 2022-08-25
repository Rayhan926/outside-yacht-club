import React from "react";
import { dekstopItems } from "../../constant";
import { useOpeConnectWalletModal } from "../../state";

function DekstopNav({ onClick }) {
  const [, setOpen] = useOpeConnectWalletModal();
  return (
    <>
      <ul className="flex flex-col items-end md:flex-row md:items-center gap-4 md:gap-12 pr-6 md:pr-0">
        {dekstopItems.map(({ text, url }, i) => (
          <li key={i} className="group">
            <a
              onClick={onClick}
              href={url}
              className="uppercase leading-[15px] font-medium text-xs text-white italic duration-100 group-hover:text-primary"
            >
              {text}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex justify-end md:inline-block pr-6 md:pr-0 mt-4 mb-8 md:m-0">
        <button
          onClick={() => {
            onClick && onClick();
            setOpen(true);
          }}
          className="bg-primary font-montserrat text-black px-[18px] py-[14px] text-xs font-semibold leading-[15px] rounded-md uppercase"
        >
          Connect wallet
        </button>
      </div>
    </>
  );
}

export default DekstopNav;
