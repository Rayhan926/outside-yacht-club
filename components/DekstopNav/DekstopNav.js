import React from "react";
import { dekstopItems } from "../../constant";
import { useOpeConnectWalletModal } from "../../state";
import cx from "classnames";
import { useRouter } from "next/router";
function DekstopNav({ onClick }) {
  const router = useRouter();
  const [, setOpen] = useOpeConnectWalletModal();
  return (
    <>
      <ul className="flex flex-col items-end md:flex-row md:items-center gap-4 md:gap-12 pr-6 md:pr-0">
        {dekstopItems.map(({ text, url }, i) => {
          const isActive = router.pathname === url;
          return (
            <li key={i} className="group">
              <a
                onClick={onClick}
                href={url}
                className={cx(
                  "uppercase leading-[15px] font-medium text-xs italic duration-100 group-hover:text-primary",
                  isActive ? "text-primary" : "text-white ",
                )}
              >
                {text}
              </a>
            </li>
          );
        })}
      </ul>

      <div className="flex justify-end md:inline-block pr-6 md:pr-0 mt-4 mb-8 md:m-0">
        <button
          onClick={() => {
            onClick && onClick();
            setOpen(true);
          }}
          className="bg-primary border border-primary hover:btn_shadow hover:bg-black duration-150 hover:text-white font-montserrat text-black px-[18px] py-[12px] text-xs font-semibold leading-[15px] rounded-md uppercase"
        >
          Connect wallet
        </button>
      </div>
    </>
  );
}

export default DekstopNav;
